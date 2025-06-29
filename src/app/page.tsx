import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/views/About';
import { Contact } from '@/views/Contact';
import { Products } from '@/views/Products';
import { Testimonials } from '@/views/Testimonials';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
