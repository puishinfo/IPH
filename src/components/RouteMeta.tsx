import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type RouteMetaConfig = {
  title: string;
  description: string;
  h1Hint: string;
  path: string;
};

const baseTitle = 'Inner Peace Holidays Pvt. Ltd.';

const routeMeta: Record<string, RouteMetaConfig> = {
  '/': {
    title: `${baseTitle} | Tours & Travels · Software Services`,
    description:
      'Inner Peace Holidays Pvt. Ltd. — Bodhgaya-based travel company offering Buddhist Circuit Tours, hotel & flight bookings, visa assistance, and professional Software Services including web & mobile app development, SaaS products, and IT consulting.',
    h1Hint: 'Tours & Travels and Software Services — Inner Peace Holidays',
    path: '/'
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${baseTitle}`,
    description:
      'Read the Privacy Policy of Inner Peace Holidays Private Limited to understand how we collect, use, and protect your personal data.',
    h1Hint: 'Privacy Policy',
    path: '/privacy-policy'
  },
  '/refund-policy': {
    title: `Refund & Cancellation Policy | ${baseTitle}`,
    description:
      'Refund and cancellation terms for Tours & Travel bookings and Software Services from Inner Peace Holidays Private Limited.',
    h1Hint: 'Refund & Cancellation Policy',
    path: '/refund-policy'
  },
  '/terms': {
    title: `Terms and Conditions | ${baseTitle}`,
    description:
      'Terms and Conditions governing use of the Inner Peace Holidays Private Limited platform, covering Tours & Travels and Software Services.',
    h1Hint: 'Terms and Conditions',
    path: '/terms'
  },
  '/software-services': {
    title: `Software Services | ${baseTitle}`,
    description:
      'IT consultancy, software design, development, implementation, technical support, and licensing services for businesses in India and abroad — by Inner Peace Holidays Private Limited.',
    h1Hint: 'Software Services by Inner Peace Holidays',
    path: '/software-services'
  },
  '/about': {
    title: `About ${baseTitle} | Bodhgaya Travel Company`,
    description:
      'Learn about Inner Peace Holidays Pvt. Ltd., a Bodhgaya-based travel and tourism company specializing in Buddhist pilgrimage tours in India and Nepal.',
    h1Hint: 'About Inner Peace Holidays Pvt. Ltd.',
    path: '/about'
  },
  '/services': {
    title: `Tour Packages and Travel Services | ${baseTitle}`,
    description:
      'Explore Buddhist tour packages, hotel booking in Bodhgaya, vehicle hire, guide services, and escort support for pilgrims and group organizers.',
    h1Hint: 'Tour Packages and Services',
    path: '/services'
  },
  '/sacred-sites': {
    title: `Buddhist Circuit Destinations | ${baseTitle}`,
    description:
      'Discover major Buddhist pilgrimage destinations including Bodhgaya, Rajgir, Nalanda, Sarnath, Kushinagar, and nearby sacred sites.',
    h1Hint: 'Buddhist Circuit Destinations',
    path: '/sacred-sites'
  },
  '/testimonials': {
    title: `Pilgrim Testimonials | ${baseTitle}`,
    description:
      'Read trusted traveler reviews and pilgrim feedback about Buddhist tours, local support, and travel arrangements from Bodhgaya.',
    h1Hint: 'Pilgrim Testimonials',
    path: '/testimonials'
  },
  '/contact': {
    title: `Contact and Booking | ${baseTitle}`,
    description:
      'Contact Inner Peace Holidays Pvt. Ltd. for quote requests, Buddhist pilgrimage planning, Bodhgaya hotel booking, and transport support.',
    h1Hint: 'Contact and Booking',
    path: '/contact'
  }
};

const setMetaTag = (selector: string, attr: 'content' | 'name' | 'property', value: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) return;
  el.setAttribute(attr, value);
};

const ensureMetaTag = (attrs: Record<string, string>) => {
  const key = Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(',');

  let existing = document.head.querySelector(`meta[data-key='${key}']`) as HTMLMetaElement | null;
  if (!existing) {
    existing = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => existing?.setAttribute(k, v));
    existing.setAttribute('data-key', key);
    document.head.appendChild(existing);
  }

  return existing;
};

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] || routeMeta['/'];

    document.title = meta.title;

    const descTag = ensureMetaTag({ name: 'description' });
    descTag?.setAttribute('content', meta.description);

    const ogTitleTag = ensureMetaTag({ property: 'og:title' });
    ogTitleTag?.setAttribute('content', meta.title);

    const ogDescTag = ensureMetaTag({ property: 'og:description' });
    ogDescTag?.setAttribute('content', meta.description);

    const twitterTitle = ensureMetaTag({ name: 'twitter:title' });
    twitterTitle?.setAttribute('content', meta.title);

    const twitterDesc = ensureMetaTag({ name: 'twitter:description' });
    twitterDesc?.setAttribute('content', meta.description);

    const robotsTag = ensureMetaTag({ name: 'robots' });
    robotsTag?.setAttribute('content', 'index, follow');

    // Internal SEO hint for maintainers inspecting DOM during QA.
    const hintTag = ensureMetaTag({ name: 'x-seo-h1-hint' });
    hintTag?.setAttribute('content', meta.h1Hint);

    setMetaTag('meta[property="og:type"]', 'content', 'website');
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');

    const existingJsonLd = document.getElementById('route-jsonld');
    if (existingJsonLd) existingJsonLd.remove();

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.id = 'route-jsonld';

    const travelAgencySchema = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Inner Peace Holidays Pvt. Ltd.',
      areaServed: ['Bodhgaya', 'Bihar', 'India', 'Nepal'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Node 1, Shop 9, Mahabodhi Shopping Complex',
        addressLocality: 'Bodhgaya',
        addressRegion: 'Bihar',
        postalCode: '824231',
        addressCountry: 'IN'
      },
      telephone: '+91 9934611463',
      email: 'innerpeaceholidays@outlook.com',
      serviceType: [
        'Buddhist Circuit Tours',
        'Hotel Booking in Bodhgaya',
        'Vehicle Hire in Bodhgaya',
        'Tour Guide Services',
        'Escort Services'
      ]
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you provide complete Buddhist circuit planning from Bodhgaya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide complete Buddhist circuit planning including itinerary design, transport, hotel booking, and on-ground support.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I request hotel booking and vehicle hire separately?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, guests can book individual services such as hotel booking in Bodhgaya and vehicle hire without taking a full package.'
          }
        }
      ]
    };

    jsonLdScript.text = JSON.stringify(pathname === '/contact' ? faqSchema : travelAgencySchema);
    document.head.appendChild(jsonLdScript);
  }, [pathname]);

  return null;
};

export default RouteMeta;
