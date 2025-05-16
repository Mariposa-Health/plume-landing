import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero from '@/sections/Hero';
import Essentials from '@/sections/Essentials';
import HowItWorks from '@/sections/HowItWorks';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Essentials />
        <HowItWorks />
        <div className='pt-64'>Featured in...</div>
      </main>
      <Footer />
    </div>
  );
}