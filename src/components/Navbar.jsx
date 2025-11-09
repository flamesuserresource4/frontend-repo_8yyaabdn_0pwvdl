import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#products', label: 'Products' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-600 to-amber-500" />
          <span className="text-lg font-semibold tracking-tight text-neutral-900">JRB Industries</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-neutral-700 hover:text-orange-600">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700">Get a Quote</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-orange-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-neutral-700">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white">Get a Quote</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
