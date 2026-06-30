import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { SVGProps } from "react";

const pageTitle = "About Box Truck Dispatching";
const pageDescription =
  "Learn how Box Truck Dispatching supports owner-operators and fleet owners with load booking, rate negotiation, paperwork, and nationwide dispatch support.";
const pagePath = "/about";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const pageUrl = siteUrl ? `${siteUrl}${pagePath}` : pagePath;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  keywords: [
    "about box truck dispatching",
    "box truck dispatch company",
    "owner operator dispatch support",
    "box truck load booking",
    "truck dispatch team",
    "nationwide dispatch support",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    type: "website",
    images: [
      {
        url: "/about/Rectangle 1702@2x.webp",
        width: 1200,
        height: 630,
        alt: "Box truck dispatching team support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/about/Rectangle 1702@2x.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type IconProps = SVGProps<SVGSVGElement>;

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.6 3.8 9 3.2l2.1 5.1-1.4 1.1c1 2 2.5 3.5 4.5 4.6l1.2-1.5 5 2.2-.6 2.4c-.3 1.3-1.5 2.2-2.9 2.1C10 18.8 5.2 14 4.8 7.1 4.7 5.7 5.6 4.2 6.6 3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19 10.5c0 5-7 9.5-7 9.5s-7-4.5-7-9.5a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const services = [
  "Load Booking Services",
  "Dedicated Truck Dispatcher",
  "Factoring Assistance",
  "Paperwork Management",
  "Driver Hiring Support",
  "MC Setup Services",
  "Accounting Support",
  "Lease On Assistance",
];

const industries = [
  "Independent Owner Operators",
  "Box Truck Carriers",
  "Last-Mile Delivery Companies",
  "Regional Freight Operators",
  "Expedited Freight Businesses",
  "Local Delivery Providers",
  "Fleet Owners",
  "Contract Carriers",
];

const states = [
  { image: "/about/ohio.png", name: "Ohio" },
  { image: "/about/Indiana.png", name: "Indiana" },
  { image: "/about/texas.png", name: "Texas" },
  { image: "/about/florida.webp", name: "Florida" },
  { image: "/about/new_york.webp", name: "New York" },
  { image: "/about/california.webp", name: "California" },
  { image: "/about/Kentucky.png", name: "Kentucky" },
  { image: "/about/illinois.webp", name: "Illinois" },
];

const benefits = [
  "Dedicated Box Truck Dispatchers",
  "Quality Freight Opportunities",
  "Rate Negotiation Support",
  "Broker Management",
  "Documentation Assistance",
  "Nationwide Dispatch Coverage",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    iconSrc: "/about/linkedin.svg",
  },
  {
    label: "Facebook",
    href: "#",
    iconSrc: "/about/facebook.svg",
  },
  {
    label: "Twitter",
    href: "#",
    iconSrc: "/about/twitter.svg",
    bgSrc: "/about/twitter_back.svg",
  },
  {
    label: "Instagram",
    href: "#",
    iconSrc: "/about/instagram.svg",
  },
  {
    label: "YouTube",
    href: "#",
    iconSrc: "/about/youtube.svg",
  },
];

const contactItems = [
  {
    body: "(800) 555-2478",
    icon: Phone,
    label: "Phone:",
  },
  {
    body: "info@boxtruckdispatching.com",
    icon: Mail,
    label: "Email:",
  },
  {
    body: "Monday - Friday: 8:00 AM - 6:00 PM",
    icon: Clock,
    label: "Business Hours:",
  },
  {
    body: "1250 Logistics Parkway, Suite 400 Columbus, OH 43215",
    icon: MapPin,
    label: "Service Area:",
  },
];

const reasons = [
  {
    body: "Every client receives personalized dispatch assistance focused on maximizing profitability.",
    title: "Dedicated Dispatch Support",
  },
  {
    body: "We work with trusted freight partners to help carriers access steady, quality load opportunities.",
    title: "Strong Broker Relationships",
  },
  {
    body: "Our team helps review rates, lanes, and load details so your truck earns with confidence.",
    title: "Rate Negotiation Expertise",
  },
  {
    body: "From paperwork to broker communication, we handle the back-office load so you can stay focused on driving.",
    title: "Administrative Relief",
  },
  {
    body: "We support your long-term goals with dispatch guidance built around consistency, revenue, and scale.",
    title: "Growth-Oriented Partnership",
  },
];

const aboutPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#about`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "Box Truck Dispatching",
      url: siteUrl,
    },
    about: {
      "@type": "Organization",
      name: "Box Truck Dispatching",
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "(800) 555-2478",
        email: "info@boxtruckdispatching.com",
        contactType: "customer support",
        areaServed: "US",
        availableLanguage: "en",
      },
    },
    mainEntity: {
      "@type": "Service",
      name: "Box Truck Dispatching Services",
      serviceType: services,
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      provider: {
        "@type": "Organization",
        name: "Box Truck Dispatching",
        url: siteUrl,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: pageUrl,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <div className="about-page">
          <section className="about-hero" aria-labelledby="about-title">
            <Image
              src="/about/Frame 4@2x.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1560px) 1520px, calc(100vw - 40px)"
              className="about-hero-image"
            />
            <div className="about-hero-overlay" />

            <div className="about-hero-copy">
              <h1 id="about-title">About Box Truck Dispatching</h1>
              <p className="about-hero-kicker">
                Keeping Box Trucks Moving Across America
              </p>
              <p>
                At Box Truck Dispatching, we help owner-operators and fleet
                owners find profitable freight, reduce deadhead miles, and keep
                their trucks moving consistently. Our mission is simple: handle
                the time-consuming dispatching work so drivers can focus on the
                road and growing their business.
              </p>
              <p>
                From load booking and rate negotiation to paperwork management
                and driver support, we provide complete dispatch solutions
                designed specifically for box truck carriers operating
                throughout the United States.
              </p>
              <p>
                Whether you run a single truck or manage a growing fleet, our
                team works as an extension of your business, helping you secure
                quality freight and maximize revenue.
              </p>
            </div>
          </section>

        <section className="about-story">
          <div className="about-story-copy">
            <h2>Our Story</h2>
            <p>
              Box Truck Dispatching was founded with a vision to simplify
              freight operations for independent carriers and small fleet
              owners.
            </p>
            <p>
              After years of experience working with brokers, shippers, dispatch
              teams, and owner-operators, our leadership recognized a common
              challenge: many box truck businesses spend too much time searching
              for loads and handling paperwork instead of generating revenue.
            </p>
            <p>
              To solve this problem, we built a dedicated dispatching company
              focused exclusively on helping box truck operators find consistent
              freight opportunities while reducing administrative burdens.
            </p>
            <p>
              Today, we proudly support carriers across multiple states and
              continue helping trucking businesses scale with confidence.
            </p>
          </div>

          <Image
            src="/about/Rectangle 1511@2x.webp"
            alt="White box truck parked near trees"
            width={626}
            height={700}
            className="about-story-portrait"
          />

          <Image
            src="/about/Rectangle 1525@2x.webp"
            alt="White box truck parked outside a warehouse"
            width={857}
            height={296}
            className="about-story-wide"
          />
        </section>

        <section className="about-founder">
          <div className="about-founder-media">
            <Image
              src="/about/Rectangle 1689@2x.webp"
              alt="Michael Carter"
              width={760}
              height={585}
            />
          </div>

          <div className="about-founder-copy">
            <p className="about-eyebrow">Meet Our Founder</p>
            <h2>Michael Carter</h2>
            <h3>Founder &amp; Operations Director</h3>
            <p>
              Michael Carter brings years of transportation and logistics
              experience to the company. Having worked closely with carriers,
              freight brokers, and dispatch operations, he understands the daily
              challenges box truck businesses face.
            </p>
            <p>
              His goal has always been to create a dispatch service that
              prioritizes transparency, profitability, and long-term
              relationships. Under his leadership, Box Truck Dispatching has
              grown into a trusted dispatch partner for carriers across the
              country.
            </p>

            <div className="about-values">
              <span>
                <Image
                  src="/about/transparency.png"
                  alt=""
                  width={72}
                  height={72}
                  aria-hidden="true"
                />
                Transparency
              </span>
              <span>
                <Image
                  src="/about/profitability.png"
                  alt=""
                  width={72}
                  height={72}
                  aria-hidden="true"
                />
                Profitability
              </span>
              <span>
                <Image
                  src="/about/longtermrelationship.png"
                  alt=""
                  width={72}
                  height={72}
                  aria-hidden="true"
                />
                Long-Term Relationship
              </span>
            </div>
          </div>
        </section>

        <section className="about-services">
          <div className="about-services-intro">
            <h2>What We Do</h2>
            <p>
              We provide comprehensive dispatching and trucking support services
              including:
            </p>
            <Image
              src="/about/Rectangle 1702@2x.webp"
              alt="White box truck parked outside a warehouse"
              width={570}
              height={344}
            />
          </div>

          <div className="about-service-grid">
            {services.map((service) => (
              <div className="about-service-card" key={service}>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="about-industries">
          <Image
            src="/about/Rectangle 1078@2x.webp"
            alt=""
            fill
            sizes="100vw"
            className="about-industries-image"
          />
          <div className="about-industries-overlay" />

          <div className="about-industries-content">
            <h2>Industries We Serve</h2>
            <div className="about-industries-list">
              {industries.map((industry) => (
                <span key={industry}>
                  <h3>{industry}</h3>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="about-coverage">
          <div className="about-coverage-heading">
            <h2>Areas We Serve</h2>
            <p>
              We provide dispatch services across all major and regional cities
              in Ohio, ensuring consistent load availability and strong lane
              coverage. From high-demand freight hubs to local delivery routes,
              our network keeps your truck moving efficiently statewide.
            </p>
          </div>

          <div className="about-state-grid">
  {states.map((state) => (
    <article className="about-state-card" key={state.name}>
      <Image
        src={state.image}
        alt={`${state.name} freight market`}
        width={290}
        height={290}
      />
      <h3 className="about-state-name">{state.name}</h3>
    </article>
  ))}
</div>
        </section>

        <section className="about-contact">
          <div className="about-contact-card">
            <h2>Contact Information</h2>

            <div className="about-contact-list">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="about-contact-item" key={item.label}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{item.label}</h3>
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="about-social-title">Connect with me</h3>

            <div className="about-socials" aria-label="Social links">
              {socialLinks.map((item) => (
                <Link key={item.label} href={item.href} aria-label={item.label}>
                  {item.label === "Twitter" && item.bgSrc ? (
                    <span className="about-twitter-icon">
                      <Image
                        src={item.bgSrc}
                        alt=""
                        fill
                        sizes="32px"
                        aria-hidden="true"
                      />
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                    </span>
                  ) : (
                    <Image
                      src={item.iconSrc}
                      alt=""
                      width={32}
                      height={32}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <aside className="about-benefits">
            <h3>Why Work With Us?</h3>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="about-why">
          <h2>Why Carriers Choose Us</h2>

          <div className="about-why-layout">
            <Image
              src="/about/Rectangle 1093.webp"
              alt="White box truck parked in a lot"
              width={750}
              height={518}
            />
            <div className="about-reason-list">
              {reasons.map((reason, index) => (
                <details
                  className="about-reason"
                  key={reason.title}
                  open={index === 0}
                >
                  <summary>
                    <h3>{reason.title}</h3>
                  </summary>

                  <p>{reason.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

                <section className="about-cta">
          <div>
            <h2>Contact Our Dispatch Team</h2>
            <p>
              <strong>Ready to keep your box truck moving?</strong>
            </p>
            <p>
              Whether you need help finding freight, negotiating rates, managing
              paperwork, or growing your operation, our team is ready to help.
            </p>
            <p>
              Visit our Contact Us page or call today to speak with a dedicated
              box truck dispatch specialist.
            </p>

            <div className="about-cta-actions">
              <Link href="/contact">Start Dispatching Today</Link>
              <Link href="/contact">Get a Free Consultation</Link>
            </div>
          </div>

          <Image
            src="/about/Rectangle 1117.webp"
            alt="Box truck ready for dispatch"
            width={760}
            height={585}
          />
        </section>

        <div
          aria-hidden="true"
          className="h-16 bg-[#F8FAFC] sm:h-20 lg:h-20"
        />
      </div>
    </>
  );
}
