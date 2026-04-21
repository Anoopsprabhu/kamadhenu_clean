import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Caretakers from "@/components/Caretakers";
import Donate from "@/components/Donate";
import Supporters from "@/components/Supporters";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <VideoGallery />
      <Impact />
      <Donate />
      <About />
      <Caretakers />
      <Supporters />

      {/* Footer */}
      <Footer />
    </main>
  );
}
