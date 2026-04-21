"use client";
import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { FileText, ExternalLink } from "lucide-react";

export default function CSRSection() {
  const { t } = useLanguage();

  return (
    <section id="csr" className="py-20 px-6 bg-saffron-50/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-cinzel font-bold text-saffron-900 text-3xl md:text-4xl mb-4">
              {t("CSR Certification", "ಸಿಎಸ್ಆರ್ ಪ್ರಮಾಣೀಕರಣ")}
            </h2>
            <div className="divider-sacred max-w-xs mx-auto mb-6" />
            <p className="font-lora text-saffron-800 text-lg max-w-2xl mx-auto italic">
              {t(
                "Kamadhenu Trust is officially registered and approved for Corporate Social Responsibility initiatives.",
                "ಕಾಮಧೇನು ಟ್ರಸ್ಟ್ ಅಧಿಕೃತವಾಗಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸಾಮಾಜಿಕ ಹೊಣೆಗಾರಿಕೆಯ ಉಪಕ್ರಮಗಳಿಗೆ ಅನುಮೋದನೆ ಪಡೆದಿದೆ.",
              )}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-saffron-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Certificate Image */}
              <div className="relative group cursor-pointer border-4 border-saffron-50 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/csr-certificate.jpg"
                  alt="CSR Certificate"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-saffron-100 p-3 rounded-xl text-saffron-600">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="font-cinzel font-bold text-saffron-900 text-xl">
                        {t("Official Approval", "ಅಧಿಕೃತ ಅನುಮೋದನೆ")}
                      </h4>
                      <p className="font-lora text-saffron-800 leading-relaxed">
                        {t(
                          "Approval letter for Form CSR-1 from the Registrar of Companies (ROC), Ministry of Corporate Affairs, Government of India.",
                          "ಭಾರತ ಸರ್ಕಾರದ ಕಾರ್ಪೊರೇಟ್ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯದ ಕಂಪನಿಗಳ ನೋಂದಣಾಧಿಕಾರಿಗಳಿಂದ (ROC) ಫಾರ್ಮ್ CSR-1 ಗಾಗಿ ಅನುಮೋದನಾ ಪತ್ರ.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-saffron-50/50 p-6 rounded-2xl border border-saffron-100/50">
                  <p className="font-lora text-sm text-saffron-800 mb-6 leading-relaxed">
                    {t(
                      "All donations made to our institution are eligible under Corporate Social Responsibility (CSR) initiatives, in accordance with applicable government guidelines. By contributing, you are not only supporting a meaningful cause but also fulfilling your organization’s CSR commitments in a transparent and impactful way.",
                      "ನಮ್ಮ ಸಂಸ್ಥೆಗೆ ನೀಡಲಾಗುವ ಎಲ್ಲಾ ದೇಣಿಗೆಗಳು ಅನ್ವಯವಾಗುವ ಸರ್ಕಾರಿ ಮಾರ್ಗಸೂಚಿಗಳ ಅನುಗುಣವಾಗಿ ಕಾರ್ಪೊರೇಟ್ ಸಾಮಾಜಿಕ ಹೊಣೆಗಾರಿಕೆ (CSR) ಉಪಕ್ರಮಗಳ ಅಡಿಯಲ್ಲಿ ಅರ್ಹವಾಗಿವೆ. ಕೊಡುಗೆ ನೀಡುವ ಮೂಲಕ, ನೀವು ಕೇವಲ ಅರ್ಥಪೂರ್ಣ ಉದ್ದೇಶವನ್ನು ಬೆಂಬಲಿಸುವುದಲ್ಲದೆ, ನಿಮ್ಮ ಸಂಸ್ಥೆಯ CSR ಬದ್ಧತೆಗಳನ್ನು ಪಾರದರ್ಶಕ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ರೀತಿಯಲ್ಲಿ ಪೂರೈಸುತ್ತಿದ್ದೀರಿ.",
                    )}
                  </p>

                  <a
                    href="/images/Approval Letter for form CSR1 roc.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-saffron-500 hover:bg-saffron-600 text-white font-cinzel font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-saffron-200 hover:-translate-y-0.5 active:scale-95 group"
                  >
                    <FileText size={20} className="group-hover:animate-pulse" />
                    <span>
                      {t(
                        "View Full PDF Document",
                        "ಪೂರ್ಣ ಪಿಡಿಎಫ್ ಡಾಕ್ಯುಮೆಂಟ್ ವೀಕ್ಷಿಸಿ",
                      )}
                    </span>
                    <ExternalLink size={16} className="opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
