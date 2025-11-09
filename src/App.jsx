import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-600">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p>© {new Date().getFullYear()} JRB Industries. All rights reserved.</p>
            <p>Made in Kerala with pride.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
