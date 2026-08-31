import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Your Blood Donation Can Save a Life</h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">Join the QALB network. We bridge the gap between active volunteer blood donors and local healthcare facilities instantly.</p>
          <div className="flex justify-center space-x-4 pt-4">
            <Link to="/become-donor" className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold shadow hover:bg-gray-100 transition">Register as Donor</Link>
            <Link to="/request-blood" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-700 transition">Request Emergency Blood</Link>
          </div>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { metric: '25k+', label: 'Registered Donors' },
          { metric: '18k+', label: 'Successful Infusions' },
          { metric: '450+', label: 'Associated Hospitals' },
          { metric: '100%', label: 'Non-profit Driven' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-extrabold text-red-600">{stat.metric}</h3>
            <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 3. Services Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Our Operational Focus Areas" subtitle="How QALB facilitates the emergency blood ecosystem" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Real-time Donor Match', body: 'Instantly geo-locate and ping matching blood cohorts within a 15km radius of your medical facility.' },
            { title: 'Cold Chain Analytics', body: 'Systematic inventory updates track blood shelf-life and ambient infrastructure metrics across partner storage hubs.' },
            { title: 'Mobile Campaign Stations', body: 'Scheduling software managing mobile blood donation vehicles throughout central community hubs.' }
          ].map((srv, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{srv.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why QALB System?</h2>
            <p className="text-gray-600 mb-6">Traditional banks can run critical deficits on rare types. QALB uses verified community distribution vectors to ensure prompt logistical responses.</p>
            <ul className="space-y-3 font-medium text-gray-700">
              <li>✓ Fully encrypted data profiles protecting donor PII</li>
              <li>✓ Seamless API linkage directly into hospital workflows</li>
              <li>✓ Direct alert tracking system via mobile SMS hooks</li>
            </ul>
          </div>
          <div className="bg-red-200 h-64 rounded-2xl flex items-center justify-center text-red-800 font-bold text-xl shadow-inner">
            [System Connectivity Architecture Map Visual]
          </div>
        </div>
      </section>

      {/* 5. Blood Groups Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Blood Group Matrix" subtitle="See who can receive what during critical transfusions" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
            <div key={bg} className="bg-white border-2 border-red-100 hover:border-red-500 rounded-xl p-6 text-center shadow-sm transition">
              <span className="text-3xl font-extrabold text-red-600 block mb-1">{bg}</span>
              <span className="text-xs text-gray-500 font-medium">View Local Availability</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Donation Process */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="The Donation Lifecycle" subtitle="Three easy steps taking less than 45 minutes altogether" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { step: '1', title: 'Registration & Check', text: 'Quick screening covering simple health vitals, hemoglobin levels, and historical medical logs.' },
            { step: '2', title: 'The Donation Event', text: 'Sit back and relax while certified phlebotomists extract exactly one blood pint safely using sterile kits.' },
            { step: '3', title: 'Refreshment & Rest', text: 'Spend 15 minutes resting with simple snacks and hydration fluids before continuing your daily schedule.' }
          ].map((proc, i) => (
            <div key={i} className="relative p-6">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{proc.step}</div>
              <h4 className="text-lg font-bold mb-2">{proc.title}</h4>
              <p className="text-sm text-gray-600">{proc.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Campaigns Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Active Regional Drives" subtitle="Find local community blood screening venues close to you" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <span className="bg-red-600 text-xs font-bold px-2.5 py-1 rounded">URGENT REQUIREMENT</span>
              <h3 className="text-xl font-bold mt-3">Metro Center Plaza Drive</h3>
              <p className="text-gray-400 text-sm mt-1">July 22, 2026 | 09:00 AM - 05:00 PM</p>
              <p className="text-gray-300 text-sm mt-4">Targeting 150 safe pints to bolster regional storage levels ahead of major arterial transit maintenance works.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <span className="bg-blue-600 text-xs font-bold px-2.5 py-1 rounded">COMMUNITY RUN</span>
              <h3 className="text-xl font-bold mt-3">Suburban University Campus Drive</h3>
              <p className="text-gray-400 text-sm mt-1">August 05, 2026 | 10:00 AM - 04:00 PM</p>
              <p className="text-gray-300 text-sm mt-4">Student-led donation initiative welcoming first-time donors with pre-donation informational tracks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Real Stories, Saved Lives" subtitle="Hear directly from recipients and volunteer donor pools" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { quote: "QALB matched my father's emergency bypass surgery request with an eligible O- donor within 35 minutes. Unbelievable platform structure.", author: "Marcus Vance, Patient Family" },
            { quote: "Being a regular donor is simple. The portal reminds me exactly when my recovery cycles clear so I can jump back in.", author: "Elena Rostova, Regular Donor" }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 italic text-gray-600 relative">
              <p>"{t.quote}"</p>
              <span className="block mt-4 text-sm font-bold text-gray-900 not-italic">— {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="space-y-4">
          {[
            { q: "Is donating blood safe for me?", a: "Yes. Every donation uses sterile, single-use equipment that is safely discarded immediately afterward, ensuring zero risk of contracting blood-borne infections." },
            { q: "How long does a donation take?", a: "The extraction process itself takes roughly 8 to 10 minutes, though the entire process—including registration and quick post-snacks—takes about 45 minutes total." },
            { q: "How frequently can I donate blood?", a: "Whole blood donors can safely contribute once every 56 days (roughly 8 weeks) to give red blood cells ample time to naturally regenerate." }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg">{faq.q}</h4>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Contact CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg space-y-6">
          <h2 className="text-3xl font-bold">Have Questions or Want to Sponsor a Drive?</h2>
          <p className="max-w-2xl mx-auto text-red-100">Our medical compliance teams are available 24/7 to orchestrate corporate, institutional, or emergency neighborhood drives.</p>
          <div className="pt-2">
            <Link to="/contact" className="bg-white text-red-700 px-8 py-3 rounded-lg font-bold shadow hover:bg-gray-100 transition inline-block">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}