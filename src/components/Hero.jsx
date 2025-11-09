import { Phone, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" /> Kerala’s Trusted Interlock Brick Maker
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Premium Interlock Bricks for Stronger, Greener Homes
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
            Built for Kerala’s climate with high compressive strength and precise interlocking. Faster construction, lower cost, and lasting quality for homes and commercial projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <Phone className="mr-2 h-5 w-5" /> Get a Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-neutral-800 transition hover:bg-neutral-50"
            >
              <MapPin className="mr-2 h-5 w-5" /> Visit Our Yard
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-orange-500" />
              <span>High Strength</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-orange-500" />
              <span>Eco‑friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-orange-500" />
              <span>On‑time Delivery</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-12 flex-1 lg:mt-0"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-100 via-white to-amber-100 shadow-xl">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-4 opacity-90">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="rounded-md bg-gradient-to-b from-amber-200/70 to-orange-200/30" />
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
              <p className="text-sm">Precision interlocking profile for quick installation</p>
              <div className="hidden items-center gap-1 sm:flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
