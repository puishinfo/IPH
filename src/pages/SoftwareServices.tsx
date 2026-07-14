import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Headphones,
  Lightbulb,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Wrench,
  Globe,
  LayoutDashboard,
} from 'lucide-react';

const whatsappLink = `https://wa.me/919934611463?text=${encodeURIComponent(
  'Hello Inner Peace Holidays, I am interested in your Software Services.'
)}`;

const offerings = [
  {
    icon: Lightbulb,
    title: 'IT Consultancy',
    desc: 'Technology strategy, system audits, digital transformation advisory, and implementation planning for businesses of all sizes.',
  },
  {
    icon: Code2,
    title: 'Software Design & Development',
    desc: 'Custom web and mobile application development, API integrations, and enterprise software built around your workflow.',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS Products',
    desc: 'Scalable, cloud-based software products with subscription licensing — ready to deploy or customized to your vertical.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web & Mobile Apps',
    desc: 'Responsive web platforms and cross-platform mobile applications using modern frameworks.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Ongoing software maintenance, bug resolution, updates, and helpdesk support for live systems.',
  },
  {
    icon: Wrench,
    title: 'Implementation & Onboarding',
    desc: 'End-to-end deployment, data migration, team training, and go-live support for new software rollouts.',
  },
];

const whyUs = [
  'Single-company accountability across design, development, and support',
  'Transparent project scoping and fixed-scope engagements available',
  'Domestic and international client support',
  'Governed by formal Terms & Conditions and Software SLA where applicable',
];

const SoftwareServices = () => {
  return (
    <div className="bg-white pt-24 sm:pt-28">

      {/* ── Page header ── */}
      <section className="relative overflow-hidden bg-brand-blue py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium text-white/95">
              IT Consultancy &amp; Software Solutions
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Software Services by Inner Peace Holidays
            </h1>
            <p className="mt-6 text-lg text-slate-200 sm:text-xl">
              IT consultancy, software design, development, implementation, technical support, and
              licensing services for businesses in India and abroad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-white/50 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold sm:text-4xl">What We Offer</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              A complete range of software and IT services delivered by the Inner Peace Holidays
              Pvt. Ltd. technology team, operating as a dedicated business unit.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="inline-flex rounded-full bg-brand-blue/10 p-3 text-brand-blue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Why Inner Peace Holidays for IT?</h2>
              <p className="mt-3 text-slate-600">
                We bring the same commitment to clear planning and dependable execution that drives
                our travel vertical — applied to technology engagements.
              </p>
              <ul className="mt-6 space-y-3">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start text-slate-700">
                    <ShieldCheck className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900 p-7 text-white">
              <Globe className="mb-4 h-8 w-8 text-amber-300" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Serving Clients in India and Abroad</h3>
              <p className="mt-3 text-slate-300">
                Our software services vertical is registered under Inner Peace Holidays Private
                Limited (CIN: U46512BR2025PTC079192) and operates with formal contracts, invoicing,
                and GST-compliant billing.
              </p>
              <p className="mt-4 text-slate-300">
                All software engagements are governed by our{' '}
                <Link to="/terms" className="font-semibold text-amber-300 hover:text-amber-200">
                  Terms &amp; Conditions
                </Link>{' '}
                and{' '}
                <Link to="/refund-policy" className="font-semibold text-amber-300 hover:text-amber-200">
                  Refund &amp; Cancellation Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-blue py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Start a Software Enquiry</h2>
              <p className="mt-4 text-slate-200">
                Share your project requirements or service needs. Our team will respond with a
                scoping overview and next steps.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-amber-300" /> +91-99346-11463
                </p>
                <p className="flex items-center">
                  <MessageCircle className="mr-2 h-4 w-4 text-amber-300" /> WhatsApp: +91-99346-11463
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-8">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className="mt-2 text-sm text-slate-600">
                For software project enquiries, support contracts, or partnership discussions.
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Send an Enquiry
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
                  href="mailto:support@innerpeaceholidays.com"
                  className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Email Us
                </a>
              </div>
              <p className="mt-5 text-xs text-slate-500">
                We support businesses in India and internationally with IT services under formal
                agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SoftwareServices;
