import Navbar from '@/components/Navbar'
import Footer  from '@/components/Footer'

const galleryItems = [
  { id: 1, caption: 'Morning feeding at the goshala',       category: 'Daily Life' },
  { id: 2, caption: 'A calf resting in the afternoon sun',  category: 'Calves' },
  { id: 3, caption: 'Open grazing on the meadow',           category: 'Grazing' },
  { id: 4, caption: 'Cow receiving veterinary care',        category: 'Healthcare' },
  { id: 5, caption: 'The goshala at sunrise',               category: 'Goshala' },
  { id: 6, caption: 'Freshly harvested fodder',             category: 'Daily Life' },
  { id: 7, caption: 'A herd of cows returning at dusk',     category: 'Daily Life' },
  { id: 8, caption: 'The caretakers with their beloved cows', category: 'People' },
  { id: 9, caption: 'Sacred Puja for Gomata',               category: 'Rituals' },
]

const colors = [
  '#D4920A', '#C85212', '#1E5E2E', '#8B4513',
  '#2A7A3A', '#E8722E', '#3B6D11', '#B07606', '#5C3A1E',
]

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen" style={{ background: '#FDF8F0' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-14">
            <p className="font-cinzel text-saffron-500 text-xs tracking-[0.3em] uppercase mb-3">Life at the Goshala</p>
            <h1 className="font-cinzel font-bold text-[#2C1810] text-4xl mb-4">Gallery</h1>
            <div className="divider-sacred max-w-xs mx-auto mt-4" />
            <p className="font-lora text-[#6B4C3B] mt-6 max-w-lg mx-auto leading-relaxed">
              Glimpses into the daily life at Kamadhenu Trust — where every cow is cherished,
              every morning is sacred, and every act of care is an act of worship.
            </p>
          </div>

          {/* Gallery grid — placeholder tiles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                style={{ background: colors[i % colors.length] }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white/20 font-cinzel text-6xl">🐄</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <p className="font-cinzel text-white font-semibold text-sm">{item.caption}</p>
                  <span className="mt-2 font-lora text-xs text-gold-400 border border-gold-400/50 px-3 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="font-lora italic text-[#6B4C3B] text-sm">
              Real photographs will be added soon. For updates, follow our progress or{' '}
              <a href="/#contact" className="text-saffron-500 hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
