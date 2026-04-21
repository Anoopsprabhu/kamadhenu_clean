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
          {/* <p className="font-cinzel text-saffron-500 text-xs tracking-[0.3em] uppercase mb-3">
            {t("Powered By", "ಇವರಿಂದ ನಡೆಸಲ್ಪಡುತ್ತಿದೆ")}
          </p> */}
          <h2 className="font-cinzel font-bold text-saffron-900 text-2xl mb-2">
            {t("Powered By", "ಇವರಿಂದ ನಡೆಸಲ್ಪಡುತ್ತಿದೆ")}
          </h2>
          <div className="divider-sacred max-w-xs mx-auto mt-3 mb-10" />

          {/* <p className="font-lora text-saffron-800 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            {t(
              "This platform is proudly built and maintained by LCode Technologies as part of their CSR initiative. We believe in leveraging technology to empower organizations that protect our sacred heritage and nurture life.",
              "ಈ ತಾಣವನ್ನು ಎಲ್‌ಕೋಡ್ ಟೆಕ್ನಾಲಜೀಸ್ ತಮ್ಮ ಸಿಎಸ್ಆರ್ ಉಪಕ್ರಮದ ಭಾಗವಾಗಿ ಹೆಮ್ಮೆಯಿಂದ ನಿರ್ಮಿಸಿದೆ ಮತ್ತು ನಿರ್ವಹಿಸುತ್ತಿದೆ. ನಮ್ಮ ಪವಿತ್ರ ಪರಂಪರೆಯನ್ನು ರಕ್ಷಿಸುವ ಮತ್ತು ಜೀವನವನ್ನು ಪೋಷಿಸುವ ಸಂಸ್ಥೆಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಲು ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸುವುದರಲ್ಲಿ ನಾವು ನಂಬಿಕೆ ಹೊಂದಿದ್ದೇವೆ.",
            )}
          </p> */}

          <div className="flex justify-center max-w-2xl mx-auto">
            {/* Lcode Technologies */}
            <div className="bg-white rounded-2xl p-8 border border-saffron-200/40 shadow-sm hover:shadow-md transition-shadow max-w-md w-full">
              <div className="w-32 h-32 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Link
                  href="https://www.lcodetechnologies.com/csr-disclosures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/LCode-CSR-Logo.png"
                    alt="Lcode Technologies"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <p className="font-lora text-saffron-800 text-sm leading-relaxed mb-4">
                {t(
                  "This platform is proudly built and maintained by LCode Technologies as part of their CSR initiative. We believe in leveraging technology to empower organizations that protect our sacred heritage and nurture life.",
                  "ಈ ತಾಣವನ್ನು ಎಲ್‌ಕೋಡ್ ಟೆಕ್ನಾಲಜೀಸ್ ತಮ್ಮ ಸಿಎಸ್ಆರ್ ಉಪಕ್ರಮದ ಭಾಗವಾಗಿ ಹೆಮ್ಮೆಯಿಂದ ನಿರ್ಮಿಸಿದೆ ಮತ್ತು ನಿರ್ವಹಿಸುತ್ತಿದೆ. ನಮ್ಮ ಪವಿತ್ರ ಪರಂಪರೆಯನ್ನು ರಕ್ಷಿಸುವ ಮತ್ತು ಜೀವನವನ್ನು ಪೋಷಿಸುವ ಸಂಸ್ಥೆಗಳನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸಲು ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸುವುದರಲ್ಲಿ ನಾವು ನಂಬಿಕೆ ಹೊಂದಿದ್ದೇವೆ.",
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
