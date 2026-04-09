import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-400 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
