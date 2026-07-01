import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Ohio Box Truck Dispatching Services",
  description:
    "Ohio box truck dispatching services for owner-operators and fleets across Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and nearby freight markets.",
  alternates: {
    canonical: "/state",
  },
  openGraph: {
    title: "Ohio Box Truck Dispatching Services",
    description:
      "Get Ohio-focused dispatch support for better loads, reduced deadhead miles, route planning, paperwork support, and rate negotiation.",
    url: "/state",
    type: "website",
  },
};

const challenges = [
  {
    title: "High Competition in Major Freight Markets",
    description:
      "Popular freight hubs like Columbus and Cincinnati attract thousands of carriers, making it harder to secure premium loads consistently.",
  },
  {
    title: "Deadhead Miles Reducing Profitability",
    description:
      "Poor load planning often results in unnecessary empty miles that increase fuel expenses and lower overall earnings.",
  },
  {
    title: "Freight Rate Fluctuations",
    description:
      "Market conditions can change rapidly, making it difficult for drivers to consistently secure profitable rates.",
  },
  {
    title: "Broker Verification Risks",
    description:
      "Working with unverified brokers increases the risk of delayed payments and operational disruptions.",
  },
  {
    title: "Route Optimization Challenges",
    description:
      "Inefficient route planning leads to wasted fuel, lost time, and missed freight opportunities.",
  },
  {
    title: "Administrative Burden",
    description:
      "Managing load boards, paperwork, broker packets, and rate confirmations takes valuable time away from driving.",
  },
  {
    title: "Limited Access to Premium Loads",
    description:
      "Many owner-operators struggle to access high-paying freight opportunities due to limited broker relationships.",
  },
  {
    title: "Cash Flow Instability",
    description:
      "Inconsistent freight scheduling can create revenue gaps that impact business growth and operational stability.",
  },
];

const solutions = [
  {
    title: "Dedicated Dispatch Management",
    description:
      "A dedicated dispatcher works directly with you to find profitable loads, coordinate schedules, and keep your truck moving consistently.",
    icon: "/state Detail/Rectangle 1524.png",
  },
  {
    title: "Load Booking & Rate Negotiation",
    description:
      "We secure freight from trusted load boards and broker networks while negotiating competitive rates to maximize revenue.",
    icon: "/state Detail/Rectangle 1524 (1).png",
  },
  {
    title: "Route Optimization",
    description:
      "Smart route planning helps reduce deadhead miles, increase loaded miles, and improve overall profitability.",
    icon: "/state Detail/Rectangle 1524 (2).png",
  },
  {
    title: "Broker Setup & Paperwork Support",
    description:
      "From broker packets to rate confirmations, we handle the administrative work so you can focus on driving.",
    icon: "/state Detail/Rectangle 1524 (3).png",
  },
  {
    title: "Driver Support & Business Growth",
    description:
      "Receive real-time dispatch assistance and growth-focused strategies designed to help Ohio box truck businesses scale efficiently.",
    icon: "/state Detail/Rectangle 1524 (4).png",
  },
];

const industries = [
  "Retail Freight",
  "General Freight",
  "Auto Parts",
  "E-Commerce Deliveries",
  "Medical Equipment",
  "Industrial Supplies",
  "Furniture Delivery",
  "Last-Mile Freight",
  "Expedited Freight",
  "Warehouse Transfers",
];

const regions = [
  {
    title: "Central Ohio",
    description:
      "Supporting carriers throughout Columbus and surrounding freight markets.",
  },
  {
    title: "Northeast Ohio",
    description:
      "Serving Cleveland, Akron, Canton, and nearby industrial freight corridors.",
  },
  {
    title: "Southwest Ohio",
    description:
      "Helping carriers secure loads in Cincinnati, Dayton, and neighboring regions.",
  },
  {
    title: "Northwest Ohio",
    description:
      "Supporting freight movement through Toledo and major interstate routes.",
  },
];

const cities = [
  "Columbus",
  "Cleveland",
  "Cincinnati",
  "Toledo",
  "Akron",
  "Dayton",
  "Parma",
  "Canton",
];

const counties = [
  "Franklin County",
  "Cuyahoga County",
  "Hamilton County",
  "Lucas County",
  "Summit County",
  "Montgomery County",
  "Cuyahoga County",
  "Stark County",
];

const tileImages = [
  "/state Detail/Rectangle 1523.png",
  "/state Detail/Rectangle 1523 (1).png",
  "/state Detail/Rectangle 1523 (2).png",
  "/state Detail/Rectangle 1523 (3).png",
  "/state Detail/Rectangle 1523 (4).png",
  "/state Detail/Rectangle 1523 (5).png",
  "/state Detail/Rectangle 1523 (6).png",
  "/state Detail/Rectangle 1523 (7).png",
  "/state Detail/Rectangle 1523 (8).png",
  "/state Detail/Rectangle 1523 (9).png",
  "/state Detail/Rectangle 1523 (10).png",
  "/state Detail/Rectangle 1523 (11).png",
  "/state Detail/Rectangle 1523 (12).png",
  "/state Detail/Rectangle 1523 (13).png",
  "/state Detail/Rectangle 1523 (14).png",
];

export default function StatePage() {
  return (
    <div className="bg-[#F8FAFC] pb-20 pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[500px] overflow-hidden px-6 py-14 sm:px-10 lg:px-[100px] lg:py-[55px]">
          <Image
            src="/state Detail/Frame 4.webp"
            alt="Ohio box truck dispatching"
            fill
            priority
            sizes="(max-width: 1560px) calc(100vw - 40px), 1520px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,47,66,0.90)_0%,rgba(1,47,66,0.30)_89%)]" />

          <div className="relative z-10 max-w-[967px]">
            <h1 className="font-[family-name:var(--font-outfit)] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Best Box Truck Dispatching Company in Ohio
            </h1>

            <p className="mt-8 max-w-[791px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-white sm:text-[20px]">
              Ohio is one of the busiest freight corridors in the Midwest,
              connecting major markets such as Columbus, Cleveland, Cincinnati,
              Toledo, Akron, and Dayton. Our Ohio-focused box truck dispatching
              services help owner-operators and fleet owners secure quality
              freight, reduce deadhead miles, increase revenue, and keep trucks
              moving consistently throughout the state and beyond.
            </p>
          </div>
        </div>
      </section>

      <ServicePicker />

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[781px] text-center font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Box Truck Dispatching Challenges Facing Ohio Truck Owners
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {challenges.map((challenge) => (
            <InfoCard key={challenge.title} {...challenge} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[776px] text-center font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Dispatching Solutions Designed for Ohio Box Truck Businesses
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </section>

      <section className="mt-20 overflow-hidden bg-[#012F42]">
        <div className="relative mx-auto min-h-[610px] w-full max-w-[1920px] px-5 py-20 text-center sm:px-8">
          <Image
            src="/state Detail/Rectangle 1078.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#012F42]/60" />

          <div className="relative z-10 mx-auto max-w-[1520px]">
            <h2 className="font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#F8FAFC] lg:text-[48px] lg:leading-[58px]">
              Industries We Help Move Across Ohio
            </h2>

            <div className="mt-[70px] flex flex-wrap justify-center gap-6">
              {industries.map((industry) => (
                <h3
                  key={industry}
                  className="rounded-[5px] bg-white/10 px-8 py-5 font-[family-name:var(--font-outfit)] text-[24px] font-semibold capitalize text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FE8F02] hover:shadow-[0_10px_26px_rgba(254,143,2,0.28)] lg:px-12 lg:py-6 lg:text-[30px]"
                >
                  {industry}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,49.35%)] lg:items-center lg:gap-[60px]">
        <div>
          <h2 className="max-w-[710px] font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
            Major Ohio Regions Covered by Our Dispatch Team
          </h2>

          <div className="mt-10 grid gap-8">
            {regions.map((region) => (
              <div
                key={region.title}
                className="transition-transform duration-300 hover:translate-x-1"
              >
                <h3 className="font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
                  {region.title}
                </h3>
                <p className="mt-3 max-w-[710px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="group relative aspect-[750/526] overflow-hidden rounded-[10px] bg-[#012F42] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(254,143,2,0.20)]">
          <Image
            src="/state Detail/Rectangle 1687.png"
            alt="Ohio freight route coverage"
            fill
            sizes="(max-width: 1023px) calc(100vw - 40px), 750px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </section>

      <CoverageGrid
        title="All the Cities in Ohio Covered"
        description="We provide dispatch services across all major and regional cities in Ohio, ensuring consistent load availability and strong lane coverage. From high-demand freight hubs to local delivery routes, our network keeps your truck moving efficiently statewide."
        items={cities}
        imageOffset={0}
        reverse={false}
      />

      <CoverageGrid
        title="Counties We Serve in Ohio"
        description="We provide dispatch services across all major and regional counties in Ohio, ensuring consistent load availability and strong lane coverage. From high-demand freight hubs to local delivery routes, our network keeps your truck moving efficiently statewide."
        items={counties}
        imageOffset={8}
        reverse
      />

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[10px] bg-[#012F42] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:min-h-[585px] lg:px-[50px] lg:py-0">
          <h2 className="max-w-[641px] font-[family-name:var(--font-outfit)] text-[40px] font-bold capitalize leading-[52px] text-[#FE8F02] lg:text-[48px] lg:leading-[60px]">
            Start Growing Your Box Truck Business in Ohio
          </h2>

          <p className="mt-8 max-w-[636px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white">
            Ohio offers tremendous freight opportunities, but success depends
            on securing the right loads at the right rates. Our dispatching team
            helps owner-operators and fleet owners stay loaded, increase
            profitability, and focus on what matters most: keeping trucks on the
            road.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 cursor-pointer"
            >
              Start Dispatching Today
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-[#FE8F02] no-underline transition-all duration-300 hover:scale-[1.03] duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[585px]">
          <Image
            src="/state Detail/Rectangle 1117.webp"
            alt="Box truck dispatching in Ohio"
            fill
            sizes="(max-width: 1023px) calc(100vw - 40px), 760px"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}

function ServicePicker() {
  return (
    <section className="relative z-10 mx-auto -mt-[75px] w-[calc(100%_-_40px)] max-w-[1120px] rounded-[10px] bg-white p-6 shadow-[0_0.625rem_1.875rem_rgba(0,0,0,0.08)] lg:p-[25px_51px]">
      <h2 className="font-[family-name:var(--font-outfit)] text-[30px] font-semibold leading-8 text-[#012F42]">
        Pick Your Service
      </h2>

      <form className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="relative h-12">
          <select className="h-full w-full appearance-none rounded-[5px] border border-[#111827] bg-white px-5 pr-12 font-[family-name:var(--font-dm-sans)] text-[18px] text-[#111827]/70 outline-none transition-[border-color,box-shadow] duration-200 hover:border-[#FE8F02] focus:border-[#FE8F02] focus:shadow-[0_0_0_3px_rgba(254,143,2,0.12)]">
            <option>View Your Service</option>
            <option>Load Booking</option>
            <option>Dedicated Dispatch</option>
            <option>Paperwork Support</option>
          </select>
          <Image
            src="/state Detail/Polygon 16.svg"
            alt=""
            width={11}
            height={9}
            className="pointer-events-none absolute right-5 top-1/2 h-[9px] w-[11px] -translate-y-1/2"
          />
        </div>

        <input
          className="h-12 rounded-[5px] border border-[#111827] px-5 font-[family-name:var(--font-dm-sans)] text-[18px] text-[#111827] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#111827]/70 hover:border-[#FE8F02] focus:border-[#FE8F02] focus:shadow-[0_0_0_3px_rgba(254,143,2,0.12)]"
          placeholder="Name"
        />

        <input
          type="email"
          className="h-12 rounded-[5px] border border-[#111827] px-5 font-[family-name:var(--font-dm-sans)] text-[18px] text-[#111827] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#111827]/70 hover:border-[#FE8F02] focus:border-[#FE8F02] focus:shadow-[0_0_0_3px_rgba(254,143,2,0.12)]"
          placeholder="Youremail@gmail.com"
        />

        <button
          type="submit"
          className="h-12 rounded-[5px] bg-[#FE8F02] px-7 font-[family-name:var(--font-outfit)] text-[18px] font-medium leading-8 text-white transition-all duration-300 hover:scale-[1.03] duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="group min-h-[240px] overflow-hidden rounded-[10px] border border-[#111827]/50 bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]">
      <div className="h-2.5 bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />
      <div className="p-5">
        <h3 className="min-h-16 font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
          {title}
        </h3>
        <p className="mt-6 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
          {description}
        </p>
      </div>
    </article>
  );
}

function SolutionCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <article className="group min-h-[384px] overflow-hidden rounded-[10px] border border-[#6B7280] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]">
      <div className="h-2.5 bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />
      <div className="p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-[5px] border border-[#012F42] transition-all duration-300 group-hover:border-[#FE8F02] group-hover:shadow-[0_0_18px_rgba(254,143,2,0.20)]">
          <Image
            src={icon}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </div>
        <h3 className="mt-5 min-h-[64px] font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
          {title}
        </h3>
        <p className="mt-5 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
          {description}
        </p>
      </div>
    </article>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[minmax(0,1fr)_minmax(0,54.55%)] lg:gap-20 lg:px-[100px] lg:py-[50px]">
      <div className="flex flex-col justify-center">
        <h2 className="max-w-[535px] font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[52px] text-white lg:text-[48px] lg:leading-[60px]">
          Stop Losing Revenue in Ohio&apos;s Competitive Freight Market
        </h2>

        <p className="mt-10 max-w-[511px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white/70">
          Consistent freight opportunities, better rates, and professional
          dispatch support can make a significant difference to your bottom
          line. Whether you&apos;re an owner-operator or managing a growing
          fleet, our dispatching team helps keep your trucks loaded and
          profitable.
        </p>
      </div>

<form className="mt-10 rounded-[10px] bg-white/10 p-6 lg:mt-0 lg:self-center lg:p-[50px]">        <div className="grid gap-5 sm:grid-cols-2">
          <CtaField label="First Name" placeholder="Enter First Name" />
          <CtaField label="Last Name" placeholder="Enter Last Name" />
          <CtaField label="Phone Number" placeholder="+1 (000) 123-1234" />
          <CtaField label="Email Address" placeholder="email@gmail.com" />
          <CtaField
            label="Truck Type"
            placeholder="Enter Truck Type"
            select
          />
          <CtaField label="MC Number" placeholder="Enter MC Number" />
        </div>

        <button
          type="submit"
          className="mt-5 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white transition-all duration-300 duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 cursor-pointer"
        >
          Get Started Now
        </button>
      </form>
    </section>
  );
}

function CtaField({
  label,
  placeholder,
  select = false,
}: {
  label: string;
  placeholder: string;
  select?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-outfit)] text-[16px] font-medium text-white">
        {label}
      </span>

      <span className="relative mt-2.5 block">
        {select ? (
          <>
            <select
              defaultValue=""
              className="h-11 w-full appearance-none rounded-[5px] border border-white/5 bg-[#012F42]/60 px-5 pr-12 font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-white/70 outline-none transition-[border-color,box-shadow] duration-200 hover:border-[#FE8F02]/70 focus:border-[#FE8F02] focus:shadow-[0_0_0_3px_rgba(254,143,2,0.12)]"
            >
              <option value="" disabled>
                {placeholder}
              </option>
              <option value="box-truck">Box Truck</option>
            </select>
            <Image
              src="/state Detail/Rectangle 1510.png"
              alt=""
              width={14}
              height={14}
              className="pointer-events-none absolute right-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
            />
          </>
        ) : (
          <input
            className="h-11 w-full rounded-[5px] border border-white/5 bg-[#012F42]/60 px-5 font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-white/70 hover:border-[#FE8F02]/70 focus:border-[#FE8F02] focus:shadow-[0_0_0_3px_rgba(254,143,2,0.12)]"
            placeholder={placeholder}
          />
        )}
      </span>
    </label>
  );
}

function CoverageGrid({
  title,
  description,
  items,
  imageOffset,
  reverse,
}: {
  title: string;
  description: string;
  items: string[];
  imageOffset: number;
  reverse: boolean;
}) {
  const firstRowItems = items.slice(0, 3);
  const remainingItems = items.slice(3);

  const intro = (
    <div className="flex flex-col justify-center rounded-[10px] py-2 lg:col-span-2">
      <h2 className="max-w-[420px] font-[family-name:var(--font-outfit)] text-[32px] font-bold leading-[38px] text-[#012F42] lg:text-[36px] lg:leading-[42px]">
        {title}
      </h2>
      <p className="mt-5 max-w-[420px] font-[family-name:var(--font-dm-sans)] text-[16px] leading-6 text-[#5B6472]">
        {description}
      </p>
    </div>
  );

  const renderCards = (cardItems: string[], offset = 0) =>
    cardItems.map((item, index) => (
      <TileCard
        key={`${item}-${offset + index}`}
        title={item}
        image={
          tileImages[(imageOffset + offset + index) % tileImages.length]
        }
      />
    ));

  return (
    <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {reverse ? (
        <>
          {renderCards(firstRowItems)}
          {intro}
          {renderCards(remainingItems, 3)}
        </>
      ) : (
        <>
          {intro}
          {renderCards(firstRowItems)}
          {renderCards(remainingItems, 3)}
        </>
      )}
    </section>
  );
}

function TileCard({ title, image }: { title: string; image: string }) {
  return (
    <article className="group relative aspect-square overflow-hidden rounded-[10px] bg-[#012F42] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(254,143,2,0.22)]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1280px) 288px, (min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#012F42]/10 to-[#012F42]/80" />
      <div className="absolute inset-x-0 bottom-0 h-2.5 bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />
      <h3 className="absolute bottom-8 left-5 right-4 font-[family-name:var(--font-outfit)] text-[18px] font-semibold leading-7 text-white xl:text-[20px] xl:leading-8">
        {title}
      </h3>
    </article>
  );
}
