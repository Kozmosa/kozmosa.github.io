import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import { allLocales } from '@/config'
import { getLangFromLocale, getLangRouteParam } from '@/i18n/lang'
import { getPostPath } from '@/i18n/path'
import { getPostDescription } from '@/utils/description'

const markdownParser = new MarkdownIt()

export function getStaticPaths() {
  return allLocales.map(lang => ({
    params: { lang: getLangRouteParam(lang) },
  }))
}

// Render markdown to HTML and strip tags to get plain searchable text
function toPlainText(markdown: string): string {
  const html = markdownParser.render(
    markdown.replace(/<!--[\s\S]*?-->/g, ''),
  )
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export const GET: APIRoute = async ({ currentLocale }) => {
  const currentLang = getLangFromLocale(currentLocale)
  const posts = await getCollection('posts', ({ data }) => {
    const shouldInclude = import.meta.env.DEV || !data.draft
    return shouldInclude && (data.lang === currentLang || data.lang === '')
  })

  const index = posts.map(post => ({
    title: post.data.title,
    permalink: getPostPath(post.data.abbrlink || post.id, currentLang),
    summary: getPostDescription(post, 'list'),
    content: toPlainText(post.body ?? ''),
  }))

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  })
}
