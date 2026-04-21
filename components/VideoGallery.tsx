"use client";
import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function VideoGallery() {
  const { t } = useLanguage();

  return (
    <section
      id="videos"
      className="py-16 px-6"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="font-cinzel font-bold text-saffron-900 text-3xl mb-2">
              {t("Moments of Bliss", "ಆನಂದದ ಕ್ಷಣಗಳು")}
            </h3>
            <p className="font-lora text-saffron-700 italic">
              {t(
                "Glimpses of daily life and sacred rituals at the trust",
                "ಟ್ರಸ್ಟ್‌ನಲ್ಲಿ ದೈನಂದಿನ ಜೀವನ ಮತ್ತು ಪವಿತ್ರ ಆಚರಣೆಗಳ ನೋಟಗಳು",
              )}
            </p>
            <div className="divider-sacred max-w-xs mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch mb-12">
            {/* Local Reel Video 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-saffron-200/50 flex flex-col h-full">
              <div className="relative aspect-[4/5] md:aspect-video bg-black">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/IMG_8870.jpg"
                >
                  <source src="/videos/instaReel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 bg-saffron-50/50 flex-1">
                <h4 className="font-cinzel font-semibold text-saffron-900 mb-1">
                  {t("Life at Goshala", "ಗೋಶಾಲೆಯ ಜೀವನ")}
                </h4>
                <p className="font-lora text-sm text-saffron-800">
                  {t(
                    "A short glimpse into the peaceful environment.",
                    "ಶಾಂತಿಯುತ ಪರಿಸರದ ಒಂದು ಸಣ್ಣ ನೋಟ.",
                  )}
                </p>
              </div>
            </div>

            {/* Local Reel Video 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-saffron-200/50 flex flex-col h-full">
              <div className="relative aspect-[4/5] md:aspect-video bg-black flex-1">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/IMG_8876.jpg"
                >
                  <source src="/videos/reel2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 bg-saffron-50/50">
                <h4 className="font-cinzel font-semibold text-saffron-900 mb-1">
                  {t("Sacred Rituals", "ಪವಿತ್ರ ಆಚರಣೆಗಳು")}
                </h4>
                <p className="font-lora text-sm text-saffron-800">
                  {t(
                    "Experience the devotion in every tradition.",
                    "ಪ್ರತಿ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಭಕ್ತಿಯನ್ನು ಅನುಭವಿಸಿ.",
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* YouTube Video (Full Width) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-saffron-200/50 flex flex-col">
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PI1rFUMw2pY"
                title="Kamadhenu Trust YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-saffron-50/50">
              <h4 className="font-cinzel font-semibold text-saffron-900 mb-1">
                {t("Documentary", "ಸಾಕ್ಷ್ಯಚಿತ್ರ")}
              </h4>
              <p className="font-lora text-sm text-saffron-800">
                {t(
                  "Understanding our mission and the journey so far.",
                  "ನಮ್ಮ ಮಿಷನ್ ಮತ್ತು ಇಲ್ಲಿಯವರೆಗಿನ ಪ್ರಯಾಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.",
                )}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
