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
  resumeUrl: string
  toc: string
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
    resumeUrl: 'https://kozmosa.github.io/resume',
    toc: 'Table of Contents',
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
    resumeUrl: 'https://kozmosa.github.io/resume',
    toc: '目录',
  },
}
