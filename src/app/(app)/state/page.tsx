import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Box Truck Dispatching Across All US States",

  description:
    "Nationwide box truck dispatching services helping carriers secure quality freight, maximize earnings, and stay moving across the United States.",

  alternates: {
    canonical: "/state",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Box Truck Dispatching Across All US States",
    description:
      "Nationwide box truck dispatching services helping carriers secure quality freight, maximize earnings, and stay moving across the United States.",
    url: "/state",
    type: "website",
  },
};

const states = [
  {
    title: "Ohio",
    description:
      "Reliable box truck dispatching services across Ohio, helping carriers secure consistent freight and maximise revenue. We manage load booking, route planning, and broker communication so you can stay focused on the road.",
    image: "/state/Rectangle 1100.png",
    featured: true,
    href: "/state/stateDetails",
  },
  {
    title: "Indiana",
    image: "/state/Rectangle 1117 (6).png",
  },
  {
    title: "Texas",
    image: "/state/Rectangle 1117 (4).png",
  },
  {
    title: "Florida",
    image: "/state/Rectangle 1117 (2).png",
  },
  {
    title: "New York",
    image: "/state/Rectangle 1117 (5).png",
  },
  {
    title: "California",
    image: "/state/Rectangle 1117 (3).png",
  },
  {
    title: "Kentucky",
    image: "/state/Rectangle 1117 (1).png",
  },
  {
    title: "Illinois",
    image: "/state/Rectangle 1117.png",
  },
];

export default function StatePage() {
  return (
    <div className="bg-[#F8FAFC] pb-20 pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[420px] overflow-hidden px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[121px]">
          <Image
            src="/Images/Frame 4@2x.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1520px) 1520px, calc(100vw - 40px)"
            className="object-cover opacity-40"
          />

          <div className="relative z-10 max-w-[970px]">
            <h1 className="font-[family-name:var(--font-outfit)] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Box Truck Dispatching Across All the US States
            </h1>

            <p className="mt-8 max-w-[904px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-white sm:text-[20px]">
              From coast to coast, we help box truck carriers secure quality
              freight and maximise earnings. Our dispatch team manages load
              sourcing, negotiations, and paperwork to keep your trucks moving
              and your business profitable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[52px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          States We Serve
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {states.map((state) => {
            const content = (
              <>
                <Image
                  src={state.image}
                  alt={state.title}
                  fill
                  sizes="(min-width: 1280px) 365px, (min-width: 640px) 50vw, calc(100vw - 40px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#012F42]/10 to-[#012F42]/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FE8F02]/10 to-[#FE8F02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 h-2.5 w-full bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />

                <div className="absolute inset-x-5 bottom-8">
                  {state.description && (
                    <p className="mb-[92px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-[25px] text-white">
                      {state.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-8 text-white">
                      {state.title}
                    </h3>

                    <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded-[2px] bg-[#FE8F02] transition-colors duration-300 group-hover:bg-white/30">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </>
            )

            return state.href ? (
              <Link
                key={state.title}
                href={state.href}
                className="group relative block h-[350px] overflow-hidden rounded-[10px] no-underline"
              >
                {content}
              </Link>
            ) : (
              <article
                key={state.title}
                className="group relative h-[350px] overflow-hidden rounded-[10px]"
              >
                {content}
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[420px] font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[54px] text-white lg:text-[48px] lg:leading-[60px]">
            Coverage Beyond These States
          </h2>

          <p className="mt-10 max-w-[395px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white/70">
            While these are our primary service areas, Box Truck Dispatching
            operates nationwide, supporting carriers across all 48 states with
            consistent load access and dispatch management.
          </p>
        </div>

        <form className="mt-10 rounded-[10px] bg-white/10 p-6 lg:mt-0 lg:p-[50px]">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="First Name" placeholder="Enter First Name" />
            <FormField label="Last Name" placeholder="Enter Last Name" />
            <FormField label="Phone Number" placeholder="+1 (000) 123-1234" />
            <FormField label="Email Address" placeholder="email@gmail.com" />
            <FormField label="Truck Type" placeholder="Enter Truck Type" />
            <FormField label="MC Number" placeholder="Enter MC Number" />
          </div>

          <button
            type="submit"
            className="mt-6 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white transition-colors hover:bg-[#E07D02]"
          >
            Get Started Now
          </button>
        </form>
      </section>
    </div>
  );
}

function FormField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-outfit)] text-[16px] font-medium text-white">
        {label}
      </span>

      <input
        className="mt-2.5 h-11 w-full rounded-[5px] border border-white/5 bg-[#012F42]/60 px-5 font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-white outline-none transition-colors placeholder:text-white/70 focus:border-[#FE8F02]"
        placeholder={placeholder}
      />
    </label>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-45"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}