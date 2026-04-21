import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const galleryItems = [
  { id: 1,  src: '/images/IMG_8695.jpg', caption: 'Gentle cows grazing',         category: 'Grazing' },
  { id: 2,  src: '/images/IMG_8699.jpg', caption: 'Afternoon rest at peace',      category: 'Daily Life' },
  { id: 3,  src: '/images/IMG_8705.jpg', caption: 'The curious young calf',      category: 'Calves' },
  { id: 4,  src: '/images/IMG_8735.jpg', caption: 'Providing traditional care',   category: 'Healthcare' },
  { id: 5,  src: '/images/IMG_8744.jpg', caption: 'Freedom in rural meadows',     category: 'Grazing' },
  { id: 6,  src: '/images/IMG_8762.jpg', caption: 'A bond beyond words',          category: 'People' },
  { id: 7,  src: '/images/IMG_8813.jpg', caption: 'Feeding time rituals',         category: 'Daily Life' },
  { id: 8,  src: '/images/IMG_8870.jpg', caption: 'The sacred Gomata',            category: 'Spirituality' },
  { id: 9,  src: '/images/IMG_8876.jpg', caption: 'Goshala at the golden hour',   category: 'Goshala' },
  { id: 10, src: '/images/IMG_8888.jpg', caption: 'Preserving local bovines',     category: 'Mission' },
]

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen pb-20" style={{ background: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-16">
            <p className="font-cinzel text-saffron-500 text-xs tracking-[0.4em] uppercase mb-4">Glimpses of Seva</p>
            <h1 className="font-cinzel font-bold text-saffron-950 text-5xl mb-6">Our Gallery</h1>
            <div className="divider-sacred max-w-sm mx-auto mb-8" />
            <p className="font-lora text-saffron-900 mt-2 max-w-2xl mx-auto text-lg leading-relaxed shadow-sm bg-white/30 p-4 rounded-xl backdrop-blur-sm">
              Explore the daily life at Kamadhenu Trust — where every cow is cherished,
              every morning is sacred, and every act of care is an act of worship.
            </p>
          </div>

          {/* Gallery grid — Real images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl border-4 border-white break-inside-avoid transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/5] sm:aspect-auto">
                  <Image 
                    src={item.src} 
                    alt={item.caption} 
                    width={600} 
                    height={800} 
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover overlay with modern design */}
                <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/90 via-saffron-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8 text-center">
                  <span className="mb-3 font-cinzel text-[10px] text-saffron-200 tracking-[0.3em] uppercase border border-saffron-200/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                  <p className="font-cinzel text-white font-bold text-xl leading-tight mb-2 transform translateY-4 group-hover:translateY-0 transition-transform duration-500">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 p-8 rounded-3xl bg-saffron-100/50 border border-saffron-200 max-w-3xl mx-auto">
            <p className="font-lora text-saffron-900 text-base mb-4">
              Do you have photos from your visit to Kamadhenu Trust? We would love to see them.
            </p>
            <a href="/#contact" className="inline-block font-cinzel font-bold text-saffron-600 hover:text-saffron-700 underline underline-offset-8 decoration-2 transition-all">
              Share your moments with us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
