"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

// Empty tiers to completely remove from rendering
const tiers: any[] = [];

const bankDetails = {
  name: "Kamadhenu Goshala Mahasangha Trust (R) Nanchar",
  bank: "Karnataka Bank",
  branch: "Goliangadi, Udupi",
  account: "2742000100008201",
  ifsc: "KARB0000274",
  upi: "kamadhenutrust@sbi",
};

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section
      id="donate"
      className="py-16 px-6"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-cinzel text-saffron-500 text-xs tracking-[0.3em] uppercase mb-3">
              {t("Join the Seva", "ಸೇವೆಯಲ್ಲಿ ಸೇರಿ")}
            </p>
            <h2
              className="font-cinzel font-bold text-saffron-900"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {t("Support the Trust", "ಟ್ರಸ್ಟ್ ಅನ್ನು ಬೆಂಬಲಿಸಿ")}
            </h2>
            <div className="divider-sacred max-w-xs mx-auto mt-4 mb-6" />
            <p className="font-lora text-saffron-800 text-lg max-w-xl mx-auto leading-relaxed">
              {t(
                "Your donation directly funds the daily care, feed, and medical needs of 300+ cows. 100% of contributions go to the animals.",
                "ನಿಮ್ಮ ದೇಣಿಗೆಯು ನೇರವಾಗಿ 300+ ಹಸುಗಳ ದೈನಂದಿನ ಆರೈಕೆ, ಮೇವು ಮತ್ತು ವೈದ್ಯಕೀಯ ಅಗತ್ಯಗಳಿಗೆ ಹಣ ನೀಡುತ್ತದೆ. 100% ದೇಣಿಗೆಗಳು ಪ್ರಾಣಿಗಳಿಗೆ ಹೋಗುತ್ತವೆ.",
              )}
            </p>
          </div>

          {/* Bank & UPI details */}
          <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto items-stretch justify-center">
            <div className="bg-white rounded-3xl p-10 border border-saffron-200/50 shadow-lg w-full lg:w-1/2 flex flex-col">
              <h3 className="font-cinzel font-bold text-saffron-900 text-xl mb-6 text-center border-b border-saffron-200 pb-4">
                {t("Bank Transfer Details", "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ವಿವರಗಳು")}
              </h3>
              <div className="flex-1 flex items-center">
                <table className="w-full font-lora text-base">
                  <tbody>
                    {[
                      [t("Account Name", "ಖಾತೆಯ ಹೆಸರು"), bankDetails.name],
                      [t("Bank", "ಬ್ಯಾಂಕ್"), bankDetails.bank],
                      [t("Branch", "ಶಾಖೆ"), bankDetails.branch],
                      [t("Account No.", "ಖಾತೆ ಸಂಖ್ಯೆ"), bankDetails.account],
                      [t("IFSC Code", "IFSC ಕೋಡ್"), bankDetails.ifsc],
                    ].map(([k, v]) => (
                      <tr
                        key={k}
                        className="border-b border-saffron-100/50 last:border-0 relative hover:bg-saffron-50/50 transition-colors"
                      >
                        <td className="py-4 text-saffron-800 pr-4 whitespace-nowrap font-medium text-sm md:text-base">
                          {k}
                        </td>
                        <td className="py-4 text-saffron-900 text-sm md:text-base font-semibold text-right">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-saffron-50 rounded-3xl p-10 border border-saffron-200/60 shadow-xl flex flex-col items-center justify-center text-center w-full lg:w-1/2">
              <h3 className="font-cinzel font-bold text-saffron-900 text-xl mb-6 pb-4 w-full border-b border-saffron-200/50">
                {t("UPI Payment", "UPI ಪಾವತಿ")}
              </h3>
              {/* QR Code */}
              <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center border-2 border-saffron-200/80 mb-6 shadow-sm overflow-hidden p-2">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/qr.jpg"
                    alt="UPI QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* <p className="font-lora text-saffron-800 text-base mb-2 font-medium">
                {t("Or send directly to", "ಅಥವಾ ನೇರವಾಗಿ ಕಳುಹಿಸಿ")}
              </p> */}
              {/* <div className="bg-white px-6 py-3 rounded-full border border-saffron-200 shadow-sm">
                <p className="font-cinzel font-bold text-saffron-500 text-lg tracking-wide">
                  {bankDetails.upi}
                </p>
              </div> */}

              <p className="font-lora text-saffron-800 text-xs mt-8 bg-white p-3 rounded-lg border border-saffron-100/50 italic leading-relaxed">
                {t(
                  "* Please send a confirmation email or message after donating so we can issue your receipt.",
                  "* ದಯವಿಟ್ಟು ದಾನ ಮಾಡಿದ ನಂತರ ದೃಢೀಕರಣ ಇಮೇಲ್ ಅಥವಾ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ ಇದರಿಂದ ನಾವು ನಿಮ್ಮ ರಸೀದಿಯನ್ನು ನೀಡಬಹುದು.",
                )}
              </p>
            </div>
          </div>

          {/* Tax note */}
          <p className="text-center font-lora text-saffron-700 text-sm mt-8 italic">
            {t(
              "Kamadhenu Trust is registered as a charitable trust. Donations may be eligible for tax deduction under Section 80G — please contact us for your certificate.",
              "ಕಾಮಧೇನು ಟ್ರಸ್ಟ್ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್ ಆಗಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದೆ. 80G ವಿಭಾಗದ ಅಡಿಯಲ್ಲಿ ದೇಣಿಗೆಗಳಿಗೆ ತೆರಿಗೆ ವಿನಾಯಿತಿ ಸಿಗಬಹುದು - ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
            )}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
