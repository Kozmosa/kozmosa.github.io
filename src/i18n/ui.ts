import type { Language } from '@/i18n/config'

interface Translation {
  title: string
  subtitle: string
  description: string
  posts: string
  tags: string
  about: string
  friends: string
  resume: string
  resumeUrl: string
  toc: string
}

export const ui: Record<Language, Translation> = {
  en: {
    title: 'Kozmosa',
    subtitle: 'Notes on computing and beyond',
    description: 'A personal blog by Kozmosa — notes on computing, code, and beyond.',
    posts: 'Posts',
    tags: 'Tags',
    about: 'About',
    friends: 'Friends',
    resume: 'Resume',
    resumeUrl: 'https://kozmosa.github.io/resume',
    toc: 'Table of Contents',
  },
  zh: {
    title: 'Kozmosa',
    subtitle: '关于计算与超越的笔记',
    description: 'Kozmosa 的个人博客 —— 关于计算、代码与更多的思考。',
    posts: '文章',
    tags: '标签',
    about: '关于',
    friends: '友链',
    resume: '简历',
    resumeUrl: 'https://kozmosa.github.io/resume',
    toc: '目录',
  },
}
