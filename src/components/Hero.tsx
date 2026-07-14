import { useState } from 'react';
import { MapPin, Star, Users, Code2, Smartphone, Cloud, Headphones } from 'lucide-react';

type Tab = 'Tours & Travels' | 'Software Services';

const BG_TRAVEL =
  'url("https://images.unsplash.com/photo-1562053650-cabb17e80ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
const BG_TECH =
  'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop")';

const Hero = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Tours & Travels');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — swaps on tab change */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: activeTab === 'Tours & Travels' ? BG_TRAVEL : BG_TECH }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pt-8">

        {/* ── Vertical selector toggle ── */}
        <div className="flex justify-center mb-10">
          <div
            className="bg-white/10 backdrop-blur-sm rounded-full p-1 flex gap-1 border border-white/20"
            role="tablist"
            aria-label="Business verticals"
          >
            {(['Tours & Travels', 'Software Services'] as Tab[]).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-amber-400 text-slate-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tours & Travels panel ── */}
        {activeTab === 'Tours & Travels' && (
          <div role="tabpanel" aria-label="Tours & Travels">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Journey to <span className="text-amber-400">Enlightenment</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Domestic &amp; international holiday packages, Buddhist Circuit Tours, flight &amp; hotel
              bookings, cab hire, and visa assistance — expert-guided from Bodhgaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Tours
              </a>
              <a
                href="#about"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Meet Your Guide
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">UNESCO Heritage Site</h3>
                <p className="text-white/80">Mahabodhi Temple Complex</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Guide</h3>
                <p className="text-white/80">6+ months monastic experience</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Korean Specialist</h3>
                <p className="text-white/80">Certified Korean interpreter</p>
              </div>
            </div>
          </div>
        )}

        {/* ── Software Services panel ── */}
        {activeTab === 'Software Services' && (
          <div role="tabpanel" aria-label="Software Services">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technology for <span className="text-amber-400">Your Business</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Web &amp; mobile app development, SaaS products, IT consulting, and software technical
              support — end-to-end digital solutions for businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Services
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {(
                [
                  { Icon: Code2, label: 'Web & Mobile Apps', sub: 'Custom development' },
                  { Icon: Cloud, label: 'SaaS Products', sub: 'Scalable cloud software' },
                  { Icon: Headphones, label: 'Technical Support', sub: 'Software assistance' },
                  { Icon: Smartphone, label: 'IT Consulting', sub: 'Strategy & advisory' },
                ] as const
              ).map(({ Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{label}</h3>
                  <p className="text-white/80 text-sm">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;