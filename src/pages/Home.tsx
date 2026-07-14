import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  Headphones,
  Hotel,
  Landmark,
  Lightbulb,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Ticket,
  Users,
  Car,
  UserRound,
  HandHeart
} from 'lucide-react';

const whatsappNumber = '919934611463';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hello Inner Peace Holidays, I want to plan a Buddhist circuit tour from Bodhgaya.'
)}`;

const featuredPackages = [
  {
    title: 'Classic Bodhgaya Pilgrimage',
    duration: '3 Days / 2 Nights',
    summary:
      'Ideal for first-time pilgrims visiting Mahabodhi Temple, Bodhi Tree, and key monasteries in Bodhgaya.',
    cta: 'Get Quote'
  },
  {
    title: 'Buddhist Circuit India Tour',
    duration: '7 Days / 6 Nights',
    summary:
      'Bodhgaya, Rajgir, Nalanda, Sarnath, and Kushinagar with coordinated hotel stays and private transport.',
    cta: 'Plan This Tour'
  },
  {
    title: 'India and Nepal Pilgrimage',
    duration: '10 Days / 9 Nights',
    summary:
      'Complete Buddhist pilgrimage route with Lumbini extension for international groups and organizers.',
    cta: 'Request Itinerary'
  }
];

const coreServices = [
  {
    icon: Ticket,
    title: 'Tour Packages',
    text: 'Custom and fixed Buddhist Circuit Tours for solo pilgrims, families, and groups.'
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    text: 'Reliable hotel booking in Bodhgaya near Mahabodhi Temple and key monastery zones.'
  },
  {
    icon: Car,
    title: 'Vehicle Hire',
    text: 'Safe and clean vehicle hire in Bodhgaya for airport transfers and full itinerary travel.'
  },
  {
    icon: UserRound,
    title: 'Tour Guide',
    text: 'Experienced local guides for spiritual context, route planning, and smooth site visits.'
  },
  {
    icon: Users,
    title: 'Escort Services',
    text: 'Dedicated support for senior pilgrims, group leaders, and international delegations.'
  }
];

const destinationHighlights = [
  'Bodhgaya - Mahabodhi Temple and Bodhi Tree',
  'Rajgir - Vulture Peak and Griddhakuta heritage zone',
  'Nalanda - Ancient monastic university ruins',
  'Sarnath - Deer Park and Dhamek Stupa',
  'Kushinagar - Mahaparinirvana Temple',
  'Lumbini (Nepal) - Birthplace of Lord Buddha'
];

const trustPoints = [
  'Bodhgaya-based team with local operational control',
  'Clear planning from airport pickup to final drop',
  'Support for domestic and international pilgrim groups',
  'Responsive communication on WhatsApp, phone, and email'
];

const testimonials = [
  {
    quote:
      'Our entire group journey was seamless. Hotels, transport, and temple timings were perfectly managed from Bodhgaya onward.',
    name: 'Group Coordinator, Thailand'
  },
  {
    quote:
      'We needed a reliable Bodhgaya tour operator for senior pilgrims, and Inner Peace Holidays handled every detail with care.',
    name: 'Travel Agent Partner, Sri Lanka'
  },
  {
    quote:
      'Fast response, clean vehicles, and practical local guidance. We strongly recommend them for Buddhist pilgrimage tours in India and Nepal.',
    name: 'Family Pilgrims, Vietnam'
  }
];

const Home = () => {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}pub/mahabodhi_banner.jpg")` }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium text-white/95 backdrop-blur">
              Bodhgaya-based travel specialists for Buddhist pilgrims
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl whitespace-nowrap">
              Inner Peace Holidays Pvt. Ltd.
            </h1>
            <p className="mt-6 text-lg text-slate-100 sm:text-xl">
              Plan trusted Buddhist pilgrimage tours in India and Nepal with complete support for tour packages, hotel booking in Bodhgaya, vehicle hire, and guide services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-300"
              >
                Plan Your Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-white/50 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp / Contact Now
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-100 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="font-semibold">Bodhgaya Tour Operator</p>
                <p className="mt-1 text-slate-200">Ground team in Bodhgaya for smooth execution</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="font-semibold">Hotel + Transport</p>
                <p className="mt-1 text-slate-200">End-to-end bookings under one company</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="font-semibold">Pilgrim Group Support</p>
                <p className="mt-1 text-slate-200">Assistance for agents and organizers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Software Services Strip ── */}
      <section className="bg-brand-blue py-10 sm:py-12" aria-label="Software Services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">

            {/* Left: badge + headline + CTA */}
            <div className="lg:flex-1">
              <p className="mb-3 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium text-white/95">
                IT Consultancy &amp; Software Solutions
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Software Services by Inner Peace Holidays
              </h2>
              <p className="mt-3 text-slate-300 sm:text-lg">
                IT consultancy, software design, development, implementation, technical support,
                and licensing services for businesses in India and abroad.
              </p>
              <Link
                to="/software-services"
                className="mt-5 inline-flex items-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
              >
                Explore Software Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right: 3 feature cards (same token as hero cards) */}
            <div className="grid gap-3 text-sm text-slate-100 sm:grid-cols-3 lg:flex-1">
              <div className="rounded-lg bg-white/10 p-4">
                <Lightbulb className="mb-2 h-5 w-5 text-amber-400" aria-hidden="true" />
                <p className="font-semibold">IT Consultancy</p>
                <p className="mt-1 text-slate-300">Strategy &amp; implementation support</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <Code2 className="mb-2 h-5 w-5 text-amber-400" aria-hidden="true" />
                <p className="font-semibold">Custom Development</p>
                <p className="mt-1 text-slate-300">Software built for your business</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <Headphones className="mb-2 h-5 w-5 text-amber-400" aria-hidden="true" />
                <p className="font-semibold">Ongoing Support</p>
                <p className="mt-1 text-slate-300">Technical support &amp; maintenance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Featured Tour Packages</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Choose a ready package or request a custom itinerary based on your travel dates, group size, and spiritual priorities.
              </p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-brand-blue hover:text-brand-red-2">
              View all tour options
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <article key={pkg.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {pkg.duration}
                </div>
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="mt-3 text-slate-600">{pkg.summary}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-red-2"
                >
                  {pkg.cta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Built for pilgrims who need dependable planning, on-ground coordination, and clear communication before and during the journey.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
              <p className="mt-3 text-slate-600">
                We focus on spiritual travel logistics with practical care, so pilgrims can concentrate on the purpose of the journey.
              </p>
              <ul className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start text-slate-700">
                    <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900 p-7 text-white">
              <h3 className="text-xl font-semibold">Top Destinations in the Buddhist Circuit</h3>
              <ul className="mt-5 space-y-3">
                {destinationHighlights.map((destination) => (
                  <li key={destination} className="flex items-start text-slate-200">
                    <Landmark className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                    {destination}
                  </li>
                ))}
              </ul>
              <Link
                to="/sacred-sites"
                className="mt-6 inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200"
              >
                Explore sacred sites
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Testimonials and Trust</h2>
            <Link to="/testimonials" className="text-sm font-semibold text-brand-blue hover:text-brand-red-2">
              Read more reviews
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 flex text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="text-slate-700">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">About Inner Peace Holidays Pvt. Ltd.</h2>
              <p className="mt-4 text-slate-600">
                Inner Peace Holidays Pvt. Ltd. is a Bodhgaya-based travel and tourism company focused on Buddhist pilgrimage planning. We organize complete journeys with transparent service details, destination sequencing, and dependable support.
              </p>
              <p className="mt-4 text-slate-600">
                Our core expertise includes Buddhist Circuit Tours, hotel booking in Bodhgaya, vehicle hire in Bodhgaya, tour guide coordination, and escort services for individuals and groups.
              </p>
              <Link to="/about" className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-red-2">
                Learn more about the company
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">Other Units</h3>
              <p className="mt-2 text-sm text-slate-600">
                Other business verticals under the company:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start">
                  <Building2 className="mr-3 mt-0.5 h-4 w-4 text-brand-blue" />
                  <span>
                    <strong>IT Services</strong> - A business unit of Inner Peace Holidays Pvt. Ltd.
                  </span>
                </li>
                <li className="flex items-start">
                  <HandHeart className="mr-3 mt-0.5 h-4 w-4 text-brand-blue" />
                  <span>
                    <strong>Handicrafts</strong> - A business unit of Inner Peace Holidays Pvt. Ltd.
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Contact for Booking and Quotes</h2>
              <p className="mt-4 text-slate-200">
                Share your travel dates, group size, and preferred route. We will send a practical plan with hotel, transport, and package options.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-amber-300" /> +91 9934611463
                </p>
                <p className="flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4 text-amber-300" /> WhatsApp: +91 9934611463
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-amber-300" /> Node 1, Shop 9, Mahabodhi Shopping Complex, Bodhgaya, Bihar 824231
                </p>
                <p className="flex items-center">
                  <Clock3 className="mr-2 h-4 w-4 text-amber-300" /> Support for domestic and international inquiries
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-8">
              <h3 className="text-xl font-semibold">Start Your Inquiry</h3>
              <p className="mt-2 text-sm text-slate-600">
                Fastest response on WhatsApp for urgent trip planning.
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Get a Quote
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919934611463"
                  className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Call Now
                </a>
              </div>
              <p className="mt-5 text-xs text-slate-500">
                We support pilgrims, travel agents, and group organizers with complete Buddhist circuit planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-1/2 z-40 inline-flex -translate-x-1/2 items-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500 md:hidden"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        WhatsApp for Quick Quote
      </a>

      <div className="pb-20 md:pb-0" />
    </div>
  );
};

export default Home;
