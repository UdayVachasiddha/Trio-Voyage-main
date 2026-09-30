// ToursSite.jsx
// Single-file React component prototype for a professional tours & travels website.
// Uses Tailwind CSS classes. Drop into a Create React App or Vite project with Tailwind configured.
// Optional: install lucide-react for icons and shadcn/ui components for improved UI.

import React, { useState } from 'react';

const packagesData = [
  {
    id: 1,
    title: 'Paris & Swiss Highlights',
    subtitle: '9 days · 7 nights',
    price: '₹1,45,999',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60',
    bullets: ['Eiffel Tower visit', 'Lucerne lake cruise', 'Mountain train to Jungfrau'],
    short: 'Experience the romance of Paris and the alpine magic of Switzerland in one elegant trip.'
  },
  {
    id: 2,
    title: 'Frankfurt • Amsterdam • Paris',
    subtitle: '7 days · 6 nights',
    price: '₹1,09,499',
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=60',
    bullets: ['Guided Amsterdam canal tour', 'Paris city walk', 'Local cuisine tasting'],
    short: 'Culture, canals, and cobbled streets — a classic European sampler.'
  },
  {
    id: 3,
    title: 'Grand European Circuit',
    subtitle: '12 days · 10 nights',
    price: '₹2,49,999',
    img: 'https://images.unsplash.com/photo-1505765051456-1e3b1c2a6f5b?auto=format&fit=crop&w=1200&q=60',
    bullets: ['Multicity coach transfers', '2 luxury hotel stays', 'Local guides included'],
    short: 'Visit multiple European gems with comfortable transfers and curated stays.'
  }
];

export default function ToursSite() {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''});
  const filtered = packagesData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) || p.short.toLowerCase().includes(query.toLowerCase())
  );

  function openPackage(pkg) {
    setSelected(pkg);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeModal() {
    setSelected(null);
  }

  function handleFormChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function submitContact(e) {
    e.preventDefault();
    // In a real app: validate & send to API. For prototype show a console message.
    console.log('Contact submitted', form);
    alert('Thanks! We received your enquiry.');
    setForm({name:'', email:'', phone:'', message:''});
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center text-white font-bold">T</div>
            <div>
              <h1 className="text-lg font-semibold">TrioVoyage</h1>
              <p className="text-xs text-slate-500">Curated tours. Trusted travel.</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#packages" className="hover:text-sky-600">Packages</a>
            <a href="#why" className="hover:text-sky-600">Why Us</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
            <button className="ml-4 px-4 py-2 rounded-full bg-sky-600 text-white text-sm shadow">Request Quote</button>
          </nav>
          <div className="md:hidden">
            <button aria-label="open menu" className="px-3 py-2 rounded-md bg-gray-100">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="h-96 bg-[url('https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/70 rounded-2xl p-8 max-w-2xl backdrop-blur">
              <h2 className="text-3xl md:text-4xl font-bold">Discover handpicked tours — travel beautifully.</h2>
              <p className="mt-3 text-slate-700">Custom itineraries, expert guides, and seamless transfers. Travel smarter, not harder.</p>

              <div className="mt-6 flex gap-3">
                <input value={query} onChange={e=>setQuery(e.target.value)} className="px-4 py-2 rounded-lg border w-full" placeholder="Search destinations or keywords" />
                <button onClick={()=>{}} className="px-5 py-2 rounded-lg bg-emerald-600 text-white">Search</button>
              </div>

              <div className="mt-4 flex gap-3 text-sm text-slate-600">
                <div className="px-3 py-1 bg-white rounded-full shadow">Best Price</div>
                <div className="px-3 py-1 bg-white rounded-full shadow">Trusted Guides</div>
                <div className="px-3 py-1 bg-white rounded-full shadow">Small Groups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold">Featured Packages</h3>
            <p className="text-sm text-slate-600">Popular handpicked itineraries for your next holiday.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 rounded-full border">All</button>
            <button className="px-4 py-2 rounded-full border">Europe</button>
            <button className="px-4 py-2 rounded-full border">Asia</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(pkg => (
            <article key={pkg.id} className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden">
              <div className="h-44 bg-cover bg-center" style={{backgroundImage:`url(${pkg.img})`}} />
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{pkg.title}</h4>
                    <p className="text-sm text-slate-500">{pkg.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{pkg.price}</div>
                    <div className="text-xs text-slate-400">per person</div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600">{pkg.short}</p>
                <ul className="mt-3 text-sm text-slate-600 space-y-1">
                  {pkg.bullets.map((b,i)=>(<li key={i}>• {b}</li>))}
                </ul>

                <div className="mt-4 flex items-center gap-3">
                  <button onClick={()=>openPackage(pkg)} className="px-4 py-2 rounded-md bg-sky-600 text-white">View Details</button>
                  <button className="px-4 py-2 rounded-md border">Book Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Why travel with TrioVoyage?</h3>
            <p className="mt-3 text-slate-600">We blend local expertise with carefully designed comfort — from start to finish.</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Small groups for better experiences</li>
              <li>Handpicked hotels and vetted transport</li>
              <li>Local guides and 24/7 support</li>
            </ul>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60" alt="guide" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold">Expert Local Guides</h5>
                <p className="text-sm text-slate-600">Insider knowledge, safe navigation, and cultural context.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60" alt="hotel" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold">Comfort-First Hotels</h5>
                <p className="text-sm text-slate-600">We prioritise location, cleanliness, and guest reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Get a tailored quote</h3>
            <p className="mt-2 text-slate-600">Tell us your travel dates and preferences. We’ll design a plan and price it for you.</p>

            <form onSubmit={submitContact} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleFormChange} placeholder="Full name" className="px-4 py-2 rounded-lg border w-full" required />
                <input name="email" value={form.email} onChange={handleFormChange} placeholder="Email" type="email" className="px-4 py-2 rounded-lg border w-full" required />
              </div>
              <input name="phone" value={form.phone} onChange={handleFormChange} placeholder="Phone / WhatsApp" className="px-4 py-2 rounded-lg border w-full" />
              <textarea name="message" value={form.message} onChange={handleFormChange} rows={4} placeholder="Tell us what you'd like (destinations, dates, group size)" className="px-4 py-2 rounded-lg border w-full" />
              <div className="flex items-center gap-4">
                <button type="submit" className="px-5 py-2 rounded-lg bg-emerald-600 text-white">Send Enquiry</button>
                <button type="button" className="px-4 py-2 rounded-lg border">Call +91 98765 43210</button>
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-tr from-sky-50 to-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold">Travel Info</h4>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <dt className="font-medium">Support</dt>
                <dd>24/7 Assistance</dd>
              </div>
              <div>
                <dt className="font-medium">Group size</dt>
                <dd>6–18 guests</dd>
              </div>
              <div>
                <dt className="font-medium">Flights</dt>
                <dd>Optional add-on</dd>
              </div>
              <div>
                <dt className="font-medium">Custom</dt>
                <dd>Tailored itineraries</dd>
              </div>
            </dl>

            <div className="mt-6">
              <h5 className="font-semibold">Need inspiration?</h5>
              <p className="text-sm text-slate-600 mt-2">Check our sample itineraries and seasonal offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-white">TrioVoyage</h4>
            <p className="text-sm text-slate-400 mt-2">Curated tours & bespoke itineraries. Registered travel company.</p>
          </div>
          <div>
            <h5 className="font-semibold">Company</h5>
            <ul className="mt-2 text-sm text-slate-400 space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm text-slate-400 mt-2">Email: hello@triovoyage.com<br/>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-6 text-sm text-slate-500">© {new Date().getFullYear()} TrioVoyage. All rights reserved.</div>
      </footer>

      {/* PACKAGE MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div onClick={closeModal} className="absolute inset-0 bg-black/40" />
          <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-60 bg-cover bg-center" style={{backgroundImage:`url(${selected.img})`}} />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{selected.title}</h3>
                  <p className="text-sm text-slate-500">{selected.subtitle}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{selected.price}</div>
                  <div className="text-xs text-slate-400">per person</div>
                </div>
              </div>

              <p className="mt-4 text-slate-600">{selected.short} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, alias.</p>
              <ul className="mt-4 list-disc list-inside text-slate-600">
                {selected.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <button className="px-4 py-2 rounded-md bg-emerald-600 text-white">Book This Trip</button>
                <button onClick={closeModal} className="px-4 py-2 rounded-md border">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
