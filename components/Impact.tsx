'use client'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './LanguageContext'
import ScrollReveal from './ScrollReveal'
function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

function ImpactCard({ item, active }: { item: any; active: boolean }) {
  const count = useCountUp(item.value, 1500, active)
  return (
    <div className="text-center p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
      <p className="font-cinzel font-black text-white mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
        {count}{item.suffix}
      </p>
      <p className="font-cinzel font-semibold text-white/90 text-base mb-2">{item.label}</p>
      <p className="font-lora italic text-white/70 text-sm leading-relaxed">{item.detail}</p>
    </div>
  )
}

export default function Impact() {
  const { t } = useLanguage()
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const impactItems = [
    { value: 300, suffix: '+', label: t('Cows Under Care', 'ಆರೈಕೆಯಲ್ಲಿರುವ ಹಸುಗಳು'),        detail: t('All breeds, all ages — every cow is sacred', 'ಎಲ್ಲಾ ತಳಿಗಳು, ಎಲ್ಲಾ ವಯಸ್ಸಿನವು - ಪ್ರತಿಯೊಂದು ಹಸುವೂ ಪವಿತ್ರವಾಗಿದೆ') },
    { value: 2,   suffix: '',  label: t('Devoted Caretakers', 'ಮೀಸಲಾದ ಆರೈಕೆದಾರರು'),     detail: t('A husband and wife giving their entire life', 'ಗಂಡ ಮತ್ತು ಹೆಂಡತಿ ತಮ್ಮ ಇಡೀ ಜೀವನವನ್ನು ನೀಡುತ್ತಿದ್ದಾರೆ') },
    { value: 365, suffix: '',  label: t('Days a Year', 'ವರ್ಷದ ದಿನಗಳು'),            detail: t('No holidays, no breaks — 365 days of service', 'ರಜೆಗಳಿಲ್ಲ, ವಿರಾಮಗಳಿಲ್ಲ - 365 ದಿನಗಳ ಸೇವೆ') },
    { value: 100, suffix: '%', label: t('Cruelty-Free', 'ಕ್ರೌರ್ಯ-ಮುಕ್ತ'),           detail: t('No animal is ever harmed, sold, or abandoned', 'ಯಾವುದೇ ಪ್ರಾಣಿಗೂ ಹಾನಿ ಮಾಡುವುದಿಲ್ಲ, ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಕೈಬಿಡುವುದಿಲ್ಲ') },
    { value: 5,   suffix: '+', label: t('Acres of Grazing Land', 'ಎಕರೆ ಮೇಯುವ ಭೂಮಿ'),  detail: t('Open pasture for natural, stress-free grazing', 'ನೈಸರ್ಗಿಕ, ಒತ್ತಡ-ಮುಕ್ತ ಮೇಯಲು ಬಯಲು ಗೋಮಾಳ') },
    { value: 12,  suffix: '+', label: t('Years of Service', 'ವರ್ಷಗಳ ಸೇವೆ'),       detail: t('Over a decade of unbroken, selfless service', 'ಒಂದು ದಶಕಕ್ಕೂ ಹೆಚ್ಚು ಕಾಲ ನಿರಂತರ, ನಿಸ್ವಾರ್ಥ ಸೇವೆ') },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="impact"
      ref={ref}
      className="py-16 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #E8722E 0%, #C85212 50%, #A83E0A 100%)' }}
    >
      {/* Decorative OM symbol */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-cinzel text-white/10 select-none" style={{ fontSize: '40vw', lineHeight: 1 }}>
          ॐ
        </span>
      </div>

        <div className="relative max-w-6xl mx-auto">
      <ScrollReveal>
          <div className="text-center mb-14">
          <p className="font-cinzel text-white/80 text-xs tracking-[0.3em] uppercase mb-3">{t('By the Numbers', 'ಸಂಖ್ಯೆಗಳಲ್ಲಿ')}</p>
          <h2 className="font-cinzel font-bold text-white text-4xl">
            {t('Our Impact', 'ನಮ್ಮ ಪ್ರಭಾವ')}
          </h2>
          <div className="w-16 h-0.5 bg-white/50 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {impactItems.map(item => (
            <ImpactCard key={item.label} item={item} active={active} />
          ))}
          </div>
      </ScrollReveal>
        </div>
    </section>
  )
}
