import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  home: string
  posts: string
  tags: string
  about: string
  friends: string
  resume: string
  search: string
  toc: string
  pinned: string
  prevPost: string
  nextPost: string
}

export const ui: Record<Language, Translation> = {
  en: {
    title: 'Kozmosa',
    subtitle: 'Build systems, beyond computing.',
    description: 'Kozmosa — build systems, beyond computing.',
    home: 'Home',
    posts: 'Posts',
    tags: 'Tags',
    about: 'About',
    friends: 'Friends',
    resume: 'Resume',
    search: 'Search',
    toc: 'Table of Contents',
    pinned: 'Pinned',
    prevPost: 'Prev',
    nextPost: 'Next',
  },
  zh: {
    title: 'Kozmosa',
    subtitle: '构建系统，超越计算。',
    description: 'Kozmosa —— 构建系统，超越计算。',
    home: '主页',
    posts: '文章',
    tags: '标签',
    about: '关于',
    friends: '友链',
    resume: '简历',
    search: '搜索',
    toc: '目录',
    pinned: '置顶',
    prevPost: '上一篇',
    nextPost: '下一篇',
  },
}
