"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function Supporters() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-cinzel text-saffron-500 text-xs tracking-[0.3em] uppercase mb-3">
            {t("Powered By", "ಇವರಿಂದ ನಡೆಸಲ್ಪಡುತ್ತಿದೆ")}
          </p>
          <h2 className="font-cinzel font-bold text-saffron-900 text-2xl mb-2">
            {t("Our Supporters", "ನಮ್ಮ ಬೆಂಬಲಿಗರು")}
          </h2>
          <div className="divider-sacred max-w-xs mx-auto mt-3 mb-10" />

          <p className="font-lora text-saffron-800 max-w-xl mx-auto mb-12 leading-relaxed">
            {t(
              "This website and our digital outreach are made possible by an organisation that believes in the power of technology to amplify noble causes.",
              "ಉದಾತ್ತ ಕಾರ್ಯಗಳನ್ನು ವರ್ಧಿಸಲು ತಂತ್ರಜ್ಞಾನದ ಶಕ್ತಿಯನ್ನು ನಂಬುವ ಸಂಸ್ಥೆಯಿಂದಾಗಿ ಈ ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ನಮ್ಮ ಡಿಜಿಟಲ್ ವ್ಯಾಪ್ತಿಯು ಸಾಧ್ಯವಾಗಿದೆ.",
            )}
          </p>

          <div className="flex justify-center max-w-2xl mx-auto">
            {/* Lcode Technologies */}
            <div className="bg-white rounded-2xl p-8 border border-saffron-200/40 shadow-sm hover:shadow-md transition-shadow max-w-md w-full">
              <div className="w-32 h-32 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/logo_lcode.webp"
                  alt="Lcode Technologies"
                  width={200}
                  height={200}
                />
              </div>
              <p className="font-lora text-saffron-800 text-sm leading-relaxed mb-4">
                {t(
                  "Mangalore-based software company providing operational and technical support for the trust's outreach and digital infrastructure.",
                  "ಟ್ರಸ್ಟ್‌ನ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯಕ್ಕಾಗಿ ಕಾರ್ಯಾಚರಣೆಯ ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುವ ಮಂಗಳೂರು ಮೂಲದ ಸಾಫ್ಟ್‌ವೇರ್ ಕಂಪನಿ.",
                )}
              </p>
              <p className="font-cinzel text-saffron-500 text-xs tracking-wide">
                {t("Mangalore, Karnataka", "ಮಂಗಳೂರು, ಕರ್ನಾಟಕ")}
              </p>
            </div>
          </div>

          <p className="font-lora italic text-saffron-800 text-sm mt-12 max-w-lg mx-auto">
            {t(
              "Are you a business or individual who wishes to support this mission? ",
              "ನೀವು ಈ ಧ್ಯೇಯವನ್ನು ಬೆಂಬಲಿಸಲು ಬಯಸುವ ವ್ಯಾಪಾರ ಅಥವಾ ವ್ಯಕ್ತಿಯೇ? ",
            )}
            <Link href="/#contact" className="text-saffron-500 hover:underline">
              {t(
                "Contact us to partner with the trust.",
                "ಟ್ರಸ್ಟ್‌ನೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
              )}
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
