import { BadgeCheck, Truck, Factory, Handshake } from 'lucide-react';

const points = [
  {
    title: 'Engineered Quality',
    desc: 'High compressive strength, uniform size, and precise interlocking for quick construction.',
    icon: BadgeCheck,
  },
  {
    title: 'On‑Time Delivery',
    desc: 'Strong logistics network across Kerala with flexible scheduling for your site needs.',
    icon: Truck,
  },
  {
    title: 'Modern Manufacturing',
    desc: 'Advanced vibro‑compression and curing process for consistent, durable products.',
    icon: Factory,
  },
  {
    title: 'Fair, Transparent Pricing',
    desc: 'No hidden costs. Clear quotations, site inspection support, and bulk order benefits.',
    icon: Handshake,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-3 text-neutral-600">Kerala’s builders trust us for dependable quality, support, and service from first call to final delivery.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ title, desc, icon: Icon }, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
