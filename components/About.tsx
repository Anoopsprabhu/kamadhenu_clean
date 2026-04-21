"use client";
import { MapPin, Heart, Leaf } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t("Pure Devotion", "ಶುದ್ಧ ಭಕ್ತಿ"),
      desc: t(
        "Every cow is treated as a member of the family — fed, healed, and loved with the same reverence as Gomata.",
        "ಪ್ರತಿಯೊಂದು ಹಸುವನ್ನೂ ಕುಟುಂಬದ ಸದಸ್ಯರಂತೆ ಕಾಣಲಾಗುತ್ತದೆ - ಗೋಮಾತೆಯಷ್ಟೇ ಭಕ್ತಿಯಿಂದ ಉಣಿಸಲಾಗುತ್ತದೆ, ವಾಸಿ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ಪ್ರೀತಿಸಲಾಗುತ್ತದೆ.",
      ),
    },
    {
      icon: Leaf,
      title: t("Natural Living", "ನೈಸರ್ಗಿಕ ಜೀವನ"),
      desc: t(
        "Our cows graze freely on open land, fed on natural grass and traditional feed — no chemical supplements.",
        "ನಮ್ಮ ಹಸುಗಳು ಬಯಲಿನಲ್ಲಿ ಮುಕ್ತವಾಗಿ ಮೇಯುತ್ತವೆ, ನೈಸರ್ಗಿಕ ಹುಲ್ಲು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಮೇವು ತಿನ್ನುತ್ತವೆ - ಯಾವುದೇ ರಾಸಾಯನಿಕ ಪೂರಕಗಳಿಲ್ಲ.",
      ),
    },
    {
      icon: MapPin,
      title: t("Rooted in Udupi", "ಉಡುಪಿಯಲ್ಲಿ ಬೇರೂರಿದೆ"),
      desc: t(
        "Nestled in the lush Brahmavar Taluk of coastal Karnataka, our goshala sits in one of India's most sacred landscapes.",
        "ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಹಚ್ಚ ಹಸಿರಿನ ಬ್ರಹ್ಮಾವರ ತಾಲೂಕಿನಲ್ಲಿರುವ ನಮ್ಮ ಗೋಶಾಲೆ ಭಾರತದ ಅತ್ಯಂತ ಪವಿತ್ರ ಭೂದೃಶ್ಯಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-6"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-cinzel text-saffron-500 text-xs tracking-[0.3em] uppercase mb-3">
              {t("Our Sacred Mission", "ನಮ್ಮ ಪವಿತ್ರ ಧ್ಯೇಯ")}
            </p>
            <h2
              className="font-cinzel font-bold text-saffron-900 mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {t("About Kamadhenu Trust", "ಕಾಮಧೇನು ಟ್ರಸ್ಟ್ ಬಗ್ಗೆ")}
            </h2>
            <div className="divider-sacred max-w-sm mx-auto mb-6" />
            <p className="font-lora text-saffron-800 text-lg max-w-2xl mx-auto leading-relaxed">
              {t(
                "Named after Kamadhenu — the divine wish-fulfilling cow of Hindu mythology — our trust honours the ancient covenant between humans and bovines that has sustained Indian civilisation for millennia.",
                "ಹಿಂದೂ ಪುರಾಣಗಳ ದೈವಿಕ ಆಸೆ ಈಡೇರಿಸುವ ಹಸು ಕಾಮಧೇನುವಿನ ಹೆಸರಿನ ನಮ್ಮ ಟ್ರಸ್ಟ್, ಸಹಸ್ರಾರು ವರ್ಷಗಳಿಂದ ಭಾರತೀಯ ನಾಗರಿಕತೆಯನ್ನು ಉಳಿಸಿಕೊಂಡಿರುವ ಮಾನವರು ಮತ್ತು ಗೋವುಗಳ ನಡುವಿನ ಪ್ರಾಚೀನ ಒಪ್ಪಂದವನ್ನು ಗೌರವಿಸುತ್ತದೆ.",
              )}
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text side */}
            <div>
              <h3 className="font-cinzel font-semibold text-saffron-900 text-2xl mb-5">
                {t(
                  "A Labour of Love in Brahmavar",
                  "ಬ್ರಹ್ಮಾವರದಲ್ಲಿ ಪ್ರೀತಿಯ ಶ್ರಮ",
                )}
              </h3>
              <div className="space-y-4 font-lora text-saffron-800 leading-relaxed">
                <p>
                  {t(
                    "Founded with a simple, profound purpose — to ensure that not a single cow in this region goes homeless, hungry, or unloved — Kamadhenu Trust is run entirely by a ",
                    "ಈ ಪ್ರದೇಶದ ಯಾವುದೇ ಹಸುವು ಮನೆಯಿಲ್ಲದೆ, ಹಸಿವಿನಿಂದ ಅಥವಾ ಪ್ರೀತಿಯಿಲ್ಲದೆ ಇರಬಾರದು ಎಂಬ ಸರಳ, ಆಳವಾದ ಉದ್ದೇಶದಿಂದ ಸ್ಥಾಪನೆಯಾದ ಕಾಮಧೇನು ಟ್ರಸ್ಟ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ",
                  )}
                  <strong className="text-saffron-600">
                    {t("dedicated couple", "ಮೀಸಲಾದ ದಂಪತಿಗಳು")}
                  </strong>
                  {t(
                    " who have devoted their lives to this cause.",
                    " ನಡೆಸುತ್ತಿದ್ದಾರೆ, ಅವರು ಈ ಉದ್ದೇಶಕ್ಕಾಗಿ ತಮ್ಮ ಜೀವನವನ್ನು ಮುಡಿಪಾಗಿಟ್ಟಿದ್ದಾರೆ.",
                  )}
                </p>
                <p>
                  {t(
                    "From dawn to dusk, they tend to over ",
                    "ಬೆಳಗಿನಿಂದ ಸಂಜೆಯವರೆಗೆ, ಅವರು ",
                  )}
                  <strong className="text-saffron-500">
                    {t("300 cows", "300 ಕ್ಕೂ ಹೆಚ್ಚು ಹಸುங்களை")}
                  </strong>
                  {t(
                    " — feeding, grooming, healing the sick, and providing dignified shelter. There are no paid employees, no large machinery. Just two hands, two hearts, and an unwavering faith.",
                    " ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ - ಆಹಾರ ನೀಡುವುದು, ಅಂದಗೊಳಿಸುವುದು, ರೋಗಿಗಳನ್ನು ಗುಣಪಡಿಸುವುದು ಮತ್ತು ಗೌರವಾನ್ವಿತ ಆಶ್ರಯವನ್ನು ಒದಗಿಸುವುದು. ಯಾವುದೇ ವೇತನ ಪಡೆಯುವ ಉದ್ಯೋಗಿಗಳಿಲ್ಲ, ದೊಡ್ಡ ಯಂತ್ರೋಪಕರಣಗಳಿಲ್ಲ. ಕೇವಲ ಎರಡು ಕೈಗಳು, ಎರಡು ಹೃದಯಗಳು ಮತ್ತು ಅಚಲ ನಂಬಿಕೆ.",
                  )}
                </p>
                <p>
                  {t("Located in ", "ಇದು ")}
                  <strong className="text-saffron-600">
                    {t(
                      "Brahmavar Taluk, Udupi District",
                      "ಬ್ರಹ್ಮಾವರ ತಾಲೂಕು, ಉಡುಪಿ ಜಿಲ್ಲೆ",
                    )}
                  </strong>
                  {t(
                    " — a region blessed by the Sauparnika river and centuries of Vaishnava tradition — the goshala is a living sanctuary for these gentle animals.",
                    "ಯಲ್ಲಿದೆ - ಸೌಪರ್ಣಿಕಾ ನದಿ ಮತ್ತು ಶತಮಾನಗಳ ವೈಷ್ಣವ ಸಂಪ್ರದಾಯದಿಂದ ಆಶೀರ್ವದಿಸಲ್ಪಟ್ಟ ಪ್ರದೇಶ - ಈ ಗೋಶಾಲೆ ಈ ಸೌಮ್ಯ ಪ್ರಾಣಿಗಳಿಗೆ ಜೀವಂತ ಅಭಯಾರಣ್ಯವಾಗಿದೆ.",
                  )}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-saffron-500">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="font-lora text-sm text-saffron-800">
                  {t(
                    "Brahmavar Taluk, Udupi District, Karnataka, India — 576 213",
                    "ಬ್ರಹ್ಮಾವರ ತಾಲೂಕು, ಉಡುಪಿ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ, ಭಾರತ - 576 213",
                  )}
                </span>
              </div>
            </div>

            {/* Visual side — stylised goshala illustration */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl border-4 border-white">
                <Image
                  src="/images/IMG_8870.jpg"
                  alt="Kamadhenu Trust Cow"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-left">
                    <p className="font-cinzel text-3xl font-bold text-white mb-1">
                      300+
                    </p>
                    <p className="font-lora text-sm text-white/90 font-medium tracking-wide uppercase">
                      {t("Protected cows", "ರಕ್ಷಿಸಿದ ಹಸುಗಳು")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values cards */}
          {/* <div className="grid md:grid-cols-3 gap-6">
          {values.map(v => (
            <div
              key={v.title}
              className="bg-white border border-saffron-200 rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-saffron-50 flex items-center justify-center mb-4">
                <v.icon className="text-saffron-500" size={22} />
              </div>
              <h4 className="font-cinzel font-semibold text-saffron-900 text-lg mb-2">{v.title}</h4>
              <p className="font-lora text-saffron-800 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div> */}
        </ScrollReveal>
      </div>
    </section>
  );
}
