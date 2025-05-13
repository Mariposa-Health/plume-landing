import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero from '@/sections/Hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}