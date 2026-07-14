import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Car,
  Globe,
  HandHeart,
  Hotel,
  MapPin,
  ShieldCheck,
  Ticket,
  UserRound,
  Users
} from 'lucide-react';

const companyFacts = [
  'Bodhgaya-based travel and tourism company',
  'Focused on Buddhist pilgrimage tours in India and Nepal',
  'Operational support for domestic travelers and international groups',
  'Integrated service model with tour, hotel, and transport planning'
];

const coreSpecializations = [
  {
    icon: Ticket,
    title: 'Buddhist Circuit Tour Planning',
    desc: 'Route design and itinerary execution for Buddhist pilgrimage tours.'
  },
  {
    icon: Hotel,
    title: 'Hotel Booking in Bodhgaya',
    desc: 'Accommodation support near temples, monasteries, and main access roads.'
  },
  {
    icon: Car,
    title: 'Vehicle Hire in Bodhgaya',
    desc: 'Reliable transport for local transfers and multi-city pilgrimage circuits.'
  },
  {
    icon: UserRound,
    title: 'Guide and Escort Services',
    desc: 'On-ground support for pilgrims, family groups, and tour organizers.'
  }
];

const About = () => {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold text-brand-blue ring-1 ring-slate-200">
                About Inner Peace Holidays Pvt. Ltd.
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                A Bodhgaya Travel Company Dedicated to Buddhist Pilgrimage Tourism
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Inner Peace Holidays Pvt. Ltd. specializes in Buddhist Circuit Tours from Bodhgaya with complete planning support. We help pilgrims and travel organizers with practical, trusted, and clear travel execution from arrival to departure.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Request Tour Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}pub/mahabodhi.jpg`}
                alt="Pilgrims at Mahabodhi Temple in Bodhgaya"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Company Introduction</h2>
              <p className="mt-4 text-slate-600">
                Inner Peace Holidays Pvt. Ltd. is built around one clear mission: deliver meaningful, well-organized Buddhist pilgrimage travel from Bodhgaya. Our team coordinates tours, stays, and transport so guests can focus on spiritual purpose rather than operational stress.
              </p>
              <p className="mt-4 text-slate-600">
                We work with international Buddhist pilgrims, domestic travelers, travel agents, and group organizers who require dependable planning and service accountability.
              </p>
              <ul className="mt-6 space-y-3">
                {companyFacts.map((fact) => (
                  <li key={fact} className="flex items-start text-slate-700">
                    <ShieldCheck className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900 p-7 text-white">
              <h3 className="text-2xl font-semibold">Bodhgaya-Based Identity</h3>
              <p className="mt-4 text-slate-200">
                Being based in Bodhgaya allows us to offer responsive local coordination, accurate travel timing, and practical support for all major Buddhist pilgrimage routes.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <p className="flex items-start">
                  <MapPin className="mr-3 mt-0.5 h-4 w-4 text-amber-300" />
                  Node 1, Shop 9, Mahabodhi Shopping Complex, Bodhgaya, Bihar 824231
                </p>
                <p className="flex items-start">
                  <Users className="mr-3 mt-0.5 h-4 w-4 text-amber-300" />
                  Service model designed for solo pilgrims, families, and large group movements
                </p>
                <p className="flex items-start">
                  <Globe className="mr-3 mt-0.5 h-4 w-4 text-amber-300" />
                  Supported routes include key Buddhist sites across India and Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Main Travel Specialization</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Travel and tourism is our primary business. Our operations and client support are centered on Buddhist sector expertise and pilgrimage logistics.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coreSpecializations.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Additional Business Units Under the Company</h2>
            <p className="mt-3 text-slate-600">
              Inner Peace Holidays Pvt. Ltd. also has additional business verticals. These units support the broader company profile, while travel and tourism remains our lead business.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start">
                <Building2 className="mr-3 mt-0.5 h-5 w-5 text-brand-blue" />
                <span>
                  <strong>IT Services</strong> - A business unit of Inner Peace Holidays Pvt. Ltd.
                </span>
              </li>
              <li className="flex items-start">
                <HandHeart className="mr-3 mt-0.5 h-5 w-5 text-brand-blue" />
                <span>
                  <strong>Handicrafts</strong> - A business unit of Inner Peace Holidays Pvt. Ltd.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
