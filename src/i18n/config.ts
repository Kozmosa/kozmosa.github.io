// Global Language Map
export const langMap = {
  en: ['en-US'],
  zh: ['zh-CN'],
} as const

// Supported Languages
export type Language = keyof typeof langMap

// Giscus Language Map
// https://giscus.app/
export const giscusLocaleMap: Record<Language, string> = {
  en: 'en',
  zh: 'zh-CN',
}
