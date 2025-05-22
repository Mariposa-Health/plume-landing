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
    <>
      <Hero />
      <Essentials />
      <HowItWorks />
      <FeaturedIn />
      <AboutUs />
      <Statistics />
      <Testimonials />
      <Newsletter />
    </>
  );
}
