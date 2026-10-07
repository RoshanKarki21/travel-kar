"use client";

import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  function searchBuses() {
    if (!from || !to || !date) {
      alert("Please enter From, To and Journey Date.");
      return;
    }

    alert(`Searching buses from ${from} to ${to} on ${date}`);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-blue-950 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-2xl shadow-lg">
              🚌
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                Travel KAR
              </h1>
              <p className="text-xs text-blue-200">Travel made simple</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium hover:text-orange-300">
              Home
            </a>
            <a
              href="#destinations"
              className="text-sm font-medium hover:text-orange-300"
            >
              Destinations
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium hover:text-orange-300"
            >
              Why Travel KAR
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-orange-300"
            >
              Contact
            </a>
          </nav>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-blue-950 transition hover:bg-orange-100">
            My Bookings
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-20 text-center md:px-8 md:pt-28">
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            🇮🇳 Your journey starts here
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Travel Easy.
            <span className="text-orange-400"> Travel Safe.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100 md:text-xl">
            Find your bus, choose your journey and travel with confidence.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="relative z-10 mx-auto -mt-24 max-w-6xl px-5 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Book your journey
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
              Search Bus Tickets
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                From
              </label>

              <input
                type="text"
                placeholder="Departure city"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                To
              </label>

              <input
                type="text"
                placeholder="Destination city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Journey Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <button
            onClick={searchBuses}
            className="mt-6 w-full rounded-xl bg-orange-500 py-4 font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 hover:shadow-xl"
          >
            🔍 Search Buses
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="why-us" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold uppercase tracking-wider text-orange-500">
            Why Travel KAR
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            A better way to travel
          </h2>

          <p className="mt-4 text-slate-600">
            Simple booking, convenient journeys and a travel experience
            designed around you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              🎫
            </div>

            <h3 className="text-xl font-extrabold">Easy Booking</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Search for your journey and make your travel planning simple.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
              💺
            </div>

            <h3 className="text-xl font-extrabold">Choose Your Seat</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Pick your preferred available seat for a comfortable journey.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              📞
            </div>

            <h3 className="text-xl font-extrabold">Customer Support</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Get help whenever you need assistance with your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-wider text-orange-500">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Popular destinations
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🌴", "Mangaluru", "Coastal journeys"],
              ["🌆", "Bengaluru", "City adventures"],
              ["🏞️", "Mysuru", "Heritage & culture"],
              ["⛰️", "Coorg", "Nature escapes"],
            ].map(([icon, city, description]) => (
              <div
                key={city}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-xl font-extrabold">{city}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-black md:text-4xl">
          Ready for your next journey?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-orange-50">
          Search your route above and start planning your trip with Travel KAR.
        </p>

        <a
          href="#home"
          className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-extrabold text-orange-600 shadow-lg transition hover:bg-orange-50"
        >
          Search a Bus
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-950 px-5 py-12 text-blue-100">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-black text-white">🚌 Travel KAR</h3>
            <p className="mt-3 max-w-sm text-sm leading-6">
              Making bus travel simpler, more convenient and easier to plan.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Quick Links</h4>

            <div className="mt-3 space-y-2 text-sm">
              <a href="#home" className="block hover:text-white">
                Home
              </a>
              <a href="#destinations" className="block hover:text-white">
                Destinations
              </a>
              <a href="#why-us" className="block hover:text-white">
                Why Travel KAR
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact</h4>

            <p className="mt-3 text-sm">
              📧 support@travelkar.com
            </p>

            <p className="mt-2 text-sm">
              📞 Customer Support
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-blue-800 pt-6 text-center text-sm">
          © 2026 Travel KAR. All rights reserved.
        </div>
      </footer>
    </main>
  );
}