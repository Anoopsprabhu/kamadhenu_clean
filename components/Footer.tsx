'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import { useLanguage } from './LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { label: t('About', 'ನಮ್ಮ ಬಗ್ಗೆ'),      href: '/#about' },
    { label: t('Our Impact', 'ನಮ್ಮ ಪ್ರಭಾವ'), href: '/#impact' },
    { label: t('Caretakers', 'ಆರೈಕೆದಾರರು'), href: '/#caretakers' },
    { label: t('Gallery', 'ಗ್ಯಾಲರಿ'),    href: '/gallery' },
    { label: t('Donate', 'ದಾನ ಮಾಡಿ'),     href: '/#donate' },
  ]

  return (
    <footer
      id="contact"
      className="relative text-white w-full block overflow-hidden mt-auto"
      style={{ background: 'linear-gradient(175deg, #C85212 0%, #8A2B06 100%)' }}
    >
      {/* Decorative top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
          <path d="M0 0C360 40 1080 40 1440 0V40H0V0Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-1">
                <Image src="/logo.png" alt="Kamadhenu Trust Logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <p className="font-cinzel font-bold text-white text-sm">Kamadhenu Trust</p>
                <p className="font-lora text-white/80 text-xs">{t('Brahmavar, Udupi', 'ಬ್ರಹ್ಮಾವರ, ಉಡುಪಿ')}</p>
              </div>
            </div>
            <p className="font-lora text-white/90 text-sm leading-relaxed">
              {t(
                "A sacred mission to protect India's cows — one goshala, one devotion, one lifetime.",
                "ಭಾರತದ ಹಸುಗಳನ್ನು ರಕ್ಷಿಸುವ ಪವಿತ್ರ ಕಾರ್ಯ - ಒಂದು ಗೋಶಾಲೆ, ಒಂದು ಭಕ್ತಿ, ಒಂದು ಜೀವಿತಾವಧಿ."
              )}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-cinzel text-white text-sm font-semibold mb-4 tracking-wide">{t('Quick Links', 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು')}</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="font-lora text-white/80 hover:text-saffron-200 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-white text-sm font-semibold mb-4 tracking-wide">{t('Contact', 'ಸಂಪರ್ಕಿಸಿ')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-saffron-200 mt-0.5 flex-shrink-0" />
                <span className="font-lora text-white/80 text-sm">
                  {t(
                      'Brahmavar Taluk, Udupi District, Karnataka — 576 213',
                      'ಬ್ರಹ್ಮಾವರ ತಾಲೂಕು, ಉಡುಪಿ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - 576 213'
                  )}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-saffron-200 flex-shrink-0" />
                <span className="font-lora text-white/80 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-saffron-200 flex-shrink-0" />
                <span className="font-lora text-white/80 text-sm">info@kamadhenutrust.org</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cinzel text-white text-sm font-semibold tracking-wide">{t('Support the Mission', 'ಮಿಷನ್ ಬೆಂಬಲಿಸಿ')}</h4>
            <Link
              href="/#donate"
              className="bg-white hover:bg-saffron-50 text-saffron-700 font-cinzel font-semibold px-5 py-3 rounded-full text-sm text-center transition-all duration-300 hover:shadow-lg"
            >
              {t('Donate Now', 'ದಾನ ಮಾಡಿ')}
            </Link>
            <p className="font-lora text-white/80 text-xs leading-relaxed">
              {t(
                '100% of all donations go directly towards the care of our 300+ cows.',
                'ಎಲ್ಲಾ ದೇಣಿಗೆಗಳ 100% ನಮ್ಮ 300+ ಹಸುಗಳ ಆರೈಕೆಗೆ ನೇರವಾಗಿ ಹೋಗುತ್ತದೆ.'
              )}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-lora text-white/70 text-xs">
            © {new Date().getFullYear()} Kamadhenu Trust. {t('All rights reserved.', 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.')}
          </p>
          <p className="font-lora text-white/70 text-xs text-center">
            {t('Supported by', 'ಬೆಂಬಲಿಸಿದವರು')} <span className="text-saffron-200">Lcode Technologies Pvt. Ltd., Mangalore</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
