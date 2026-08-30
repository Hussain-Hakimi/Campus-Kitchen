"use client";

import { useMemo, useState } from "react";
import { menuItems, type MenuItem } from "../data/menu";

const BUSINESS_WHATSAPP_NUMBER = "923234524396";
type CartItem = MenuItem & { quantity: number };
const money = (value: number) => `${value.toLocaleString()} PKR`;

const reviews = [
  { name: "University Student", text: "Fresh, tasty, and much better than expected. The biryani arrived warm and delicious!" },
  { name: "Happy Customer", text: "Very convenient ordering through WhatsApp. The food felt homemade and the price was reasonable." },
  { name: "Campus Customer", text: "Good portions, great taste, and friendly service. I would definitely order again." },
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("All");
  const [addedMessage, setAddedMessage] = useState("");
  const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))];
  const filteredItems = category === "All" ? menuItems : menuItems.filter((item) => item.category === category);
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(item: MenuItem) {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) return current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry);
      return [...current, { ...item, quantity: 1 }];
    });
    setAddedMessage(`${item.name} added to your cart.`);
    window.setTimeout(() => setAddedMessage(""), 2500);
  }
  function changeQuantity(id: number, amount: number) {
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0));
  }
  function orderOnWhatsApp() {
    if (!cart.length) return alert("Please add at least one food item to your order.");
    if (!name.trim() || !phone.trim() || !address.trim()) return alert("Please enter your name, phone number, and delivery address.");
    const lines = cart.map((item) => `${item.quantity} × ${item.name} — ${money(item.price * item.quantity)}`);
    const message = ["Hello Halal Biryani House! 🍛", "", "I would like to place an order.", "", "Order:", ...lines, "", `Total: ${money(total)}`, "", `Customer Name: ${name.trim()}`, `Phone: ${phone.trim()}`, `Delivery Address: ${address.trim()}`, note.trim() ? `Note: ${note.trim()}` : "", "", "Thank you!"].filter(Boolean).join("\n");
    window.open(`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3 font-bold text-brand-ink"><img src="/assets/logo.svg" alt="Halal Biryani House logo" className="h-11 w-auto max-w-[180px] object-contain" /></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold sm:flex"><a href="#home" className="hover:text-brand-orange">Home</a><a href="#menu" className="hover:text-brand-orange">Menu</a><a href="#reviews" className="hover:text-brand-orange">Reviews</a><a href="#contact" className="hover:text-brand-orange">Contact</a></nav>
          <a href="#order" className="rounded-full bg-brand-green px-4 py-2 text-sm font-bold text-white shadow-sm hover:opacity-90">Cart ({itemCount})</a>
        </div>
      </header>

      {addedMessage && <div role="status" aria-live="polite" className="fixed left-1/2 top-20 z-[60] -translate-x-1/2 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-white shadow-lg">✓ {addedMessage}</div>}

      <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <div><div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-brand-green">🏠 Homemade • Fresh • Halal</div><h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">Fresh Homemade Food,<br /><span className="text-brand-orange">Made for You.</span></h1><p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">Delicious homemade meals prepared fresh and delivered near your university.</p><a href="#menu" className="mt-7 inline-flex rounded-full bg-brand-orange px-7 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5">View Menu ↓</a></div>
        <div className="relative overflow-hidden rounded-[2rem] shadow-soft"><img src="/assets/chicken-biryani.svg" alt="Fresh homemade chicken biryani" className="h-[360px] w-full object-cover sm:h-[440px]" /><div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg"><p className="text-xs font-bold uppercase tracking-wider text-brand-green">Made fresh</p><p className="font-bold">Comfort food, close to campus.</p></div></div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-bold text-brand-orange">OUR MENU</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">Choose your meal</h2></div><div className="flex flex-wrap gap-2">{categories.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-4 py-2 text-sm font-bold ${category === cat ? "bg-brand-green text-white" : "bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-brand-orange"}`}>{cat}</button>)}</div></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filteredItems.map((item) => <article key={item.id} className="overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1"><img src={item.image} alt={item.name} className="h-48 w-full object-cover" loading="lazy" /><div className="p-5"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-black">{item.name}</h3><span className="whitespace-nowrap rounded-full bg-orange-50 px-3 py-1 text-sm font-black text-brand-orange">{money(item.price)}</span></div><p className="mt-2 min-h-12 text-sm leading-6 text-stone-500">{item.description}</p><button onClick={() => addToCart(item)} className="mt-4 w-full rounded-2xl bg-brand-orange px-4 py-3 font-bold text-white hover:opacity-90">Add to Order</button></div></article>)}</div></section>

      <section id="order" className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr]"><div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8"><p className="font-bold text-brand-green">YOUR ORDER</p><h2 className="mt-1 text-3xl font-black">Cart & total</h2><div className="mt-6 space-y-3">{cart.length === 0 ? <p className="rounded-2xl bg-brand-cream p-5 text-stone-500">Your cart is empty. Add something delicious from the menu.</p> : cart.map((item) => <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl bg-brand-cream p-3"><div><p className="font-bold">{item.name}</p><p className="text-sm text-stone-500">{money(item.price)} each</p></div><div className="flex items-center gap-2"><button onClick={() => changeQuantity(item.id, -1)} className="h-8 w-8 rounded-full bg-white font-black">−</button><span className="w-5 text-center font-bold">{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} className="h-8 w-8 rounded-full bg-white font-black">+</button></div></div>)}</div><div className="mt-6 flex items-center justify-between border-t pt-5 text-xl font-black"><span>Total</span><span className="text-brand-orange">{money(total)}</span></div></div><div className="rounded-3xl bg-brand-green p-6 text-white shadow-soft sm:p-8"><p className="font-bold text-green-100">CHECKOUT</p><h2 className="mt-1 text-3xl font-black">Send your order</h2><p className="mt-2 text-green-50">Fill in your details, then WhatsApp will open with your order ready to send.</p><div className="mt-6 space-y-3"><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Customer name" className="w-full rounded-2xl border-0 px-4 py-3 text-brand-ink outline-none ring-2 ring-transparent focus:ring-orange-300" /><input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" type="tel" className="w-full rounded-2xl border-0 px-4 py-3 text-brand-ink outline-none ring-2 ring-transparent focus:ring-orange-300" /><textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address" rows={3} className="w-full rounded-2xl border-0 px-4 py-3 text-brand-ink outline-none ring-2 ring-transparent focus:ring-orange-300" /><textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional note" rows={2} className="w-full rounded-2xl border-0 px-4 py-3 text-brand-ink outline-none ring-2 ring-transparent focus:ring-orange-300" /><button onClick={orderOnWhatsApp} className="w-full rounded-2xl bg-white px-5 py-4 font-black text-brand-green shadow-lg hover:bg-orange-50">Order on WhatsApp →</button></div></div></section>

      <section id="reviews" className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><div className="mb-8 text-center"><p className="font-bold text-brand-orange">CUSTOMER LOVE</p><h2 className="mt-1 text-3xl font-black sm:text-4xl">What customers say</h2><p className="mx-auto mt-3 max-w-2xl text-stone-500">Simple, homemade food and friendly service for our campus community.</p></div><div className="grid gap-5 md:grid-cols-3">{reviews.map((review) => <article key={review.name} className="rounded-3xl bg-white p-6 shadow-soft"><div className="text-lg tracking-wide" aria-label="5 stars">★★★★★</div><p className="mt-4 leading-7 text-stone-600">“{review.text}”</p><p className="mt-5 font-black text-brand-ink">{review.name}</p></article>)}</div></section>

      <footer id="contact" className="mt-8 bg-brand-ink text-white"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3"><div><div className="flex items-center gap-3 text-xl font-black"><img src="/assets/logo.svg" alt="Halal Biryani House" className="h-10 w-auto rounded-lg" /></div><p className="mt-3 text-sm leading-6 text-stone-300">Fresh homemade food, made for you and delivered near your university.</p></div><div><h3 className="font-bold">Contact</h3><p className="mt-3 text-sm text-stone-300">WhatsApp: 03234524396</p><a href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold text-green-300 hover:text-white">Chat on WhatsApp →</a></div><div><h3 className="font-bold">Opening Hours</h3><p className="mt-3 text-sm text-stone-300">Every day: 11:00 AM – 10:00 PM</p><p className="mt-2 text-sm text-stone-300">Location: Near your university</p></div></div><div className="border-t border-white/10 py-5 text-center text-xs text-stone-400">© {new Date().getFullYear()} Halal Biryani House. Homemade with care.</div></footer>
    </main>
  );
}
