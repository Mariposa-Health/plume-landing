import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero from '@/sections/Hero';
import Essentials from '@/sections/Essentials';
import HowItWorks from '@/sections/HowItWorks';
import FeaturedIn from '@/sections/Features';
import AboutUs from '@/sections/About';
import Testimonials from '@/sections/Testimonials';
import Newsletter from '@/sections/Newsletter';
import Statistics from '@/sections/Statistics';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Essentials />
        <HowItWorks />
        <FeaturedIn />
        <AboutUs />
        <Statistics />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}