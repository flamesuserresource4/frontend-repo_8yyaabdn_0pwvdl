import { PackageCheck, Ruler, Shield, Leaf } from 'lucide-react';

const products = [
  {
    name: 'Interlock Brick – Standard',
    size: '230 x 115 x 100 mm',
    strength: '10–12 MPa',
    features: ['Precision fit', 'Fast installation', 'Smooth finish'],
  },
  {
    name: 'Interlock Brick – Premium',
    size: '230 x 115 x 120 mm',
    strength: '12–15 MPa',
    features: ['Higher density', 'Superior strength', 'Low water absorption'],
  },
  {
    name: 'Paver Blocks',
    size: '60/80 mm thickness',
    strength: 'M30 – M40',
    features: ['Heavy load bearing', 'Skid resistant', 'Color options'],
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Products</h2>
          <p className="mt-3 text-neutral-600">High-strength, eco‑friendly bricks and pavers built for Kerala’s climate and terrain.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <div key={idx} className="group rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600 flex items-center gap-2"><Ruler className="h-4 w-4" /> {p.size}</p>
                </div>
                <PackageCheck className="h-5 w-5 text-orange-600" />
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm text-neutral-700">
                <Shield className="h-4 w-4 text-orange-600" />
                Strength: {p.strength}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-6 inline-block rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-orange-700">Request Pricing</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
