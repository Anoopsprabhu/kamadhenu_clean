'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'ka'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (en: string, ka: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = (en: string, ka: string) => (lang === 'en' ? en : ka)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
