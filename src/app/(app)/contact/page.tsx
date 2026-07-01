import type { Metadata } from "next";
import Image from "next/image";
import { TestimonialsSection } from "../components/LandingPageSections";
import { ContactInfoPanel } from "../components/ContactInfoPanel";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const heroImage = "/contact/images/Frame 4 (1).webp";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Contact Box Truck Dispatching",
  description:
    "Contact Box Truck Dispatching for dispatch support, load booking, rate negotiation, and a free consultation for your trucking operation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Box Truck Dispatching",
    description:
      "Request a free consultation with our dispatch specialists and keep your trucks moving with reliable freight support.",
    url: "/contact",
    type: "website",
  },
};

const contactCards = [
  {
    label: "Phone:",
    value: "+1 (555) 123-4567",
    iconSrc: "/contact/images/phone.png",
    iconAlt: "Phone icon",
  },
  {
    label: "Email:",
    value: "boxtruckdispatch@gmail.com",
    iconSrc: "/contact/images/mail.png",
    iconAlt: "Email icon",
  },
  {
    label: "Business Hours:",
    value: "Monday - Friday: 8:00 AM - 6:00 PM",
    iconSrc: "/contact/images/clock.png",
    iconAlt: "Clock icon",
  },
  {
    label: "Service Area:",
    value: "All 50 U.S. States",
    iconSrc: "/contact/images/location.png",
    iconAlt: "Location icon",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#social",
    iconSrc: "/contact/icons/linkedin.svg",
  },
  {
    label: "Facebook",
    href: "#social",
    iconSrc: "/contact/icons/facebook.svg",
  },
  {
    label: "Twitter",
    href: "#social",
    iconSrc: "/contact/icons/twitter.svg",
    bgSrc: "/contact/icons/twitter_back.svg",
  },
  {
    label: "Instagram",
    href: "#social",
    iconSrc: "/contact/icons/instagram.svg",
  },
  {
    label: "YouTube",
    href: "#social",
    iconSrc: "/contact/icons/youtube.svg",
  },
];

const benefits = [
  "Dedicated Box Truck Dispatchers",
  "Quality Freight Opportunities",
  "Rate Negotiation Support",
  "Broker Management",
  "Documentation Assistance",
  "Nationwide Dispatch Coverage",
];

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20 pt-5 sm:pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_32px)] max-w-[1520px] overflow-hidden rounded-[12px] sm:w-[calc(100%_-_40px)] sm:rounded-[20px]">
        <div className="relative min-h-[360px] overflow-hidden px-5 py-12 sm:min-h-[420px] sm:px-10 sm:py-16 lg:min-h-[500px] lg:px-[100px] lg:py-[137px]">
          <Image
            src={heroImage}
            alt="Box truck dispatch contact hero"
            fill
            priority
            sizes="(max-width: 1520px) calc(100vw - 40px), 1520px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#012F42]/95 via-[#012F42]/85 to-[#012F42]/55" />

          <div className="relative z-10 max-w-[970px]">
            <h1 className="font-[family-name:var(--font-outfit)] text-[36px] font-bold capitalize leading-[44px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Contact Us
            </h1>

            <p className="mt-5 font-[family-name:var(--font-outfit)] text-[22px] font-bold leading-8 text-[#FE8F02] sm:mt-6 sm:text-[30px] sm:leading-10">
              Let&apos;s Keep Your Trucks Moving
            </p>

            <p className="mt-6 max-w-[687px] font-[family-name:var(--font-dm-sans)] text-[16px] leading-7 text-white sm:mt-8 sm:text-[20px] sm:leading-8">
              Get in touch today to learn how our dispatching services can help
              you increase revenue and spend more time on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid w-[calc(100%_-_32px)] max-w-[1520px] gap-8 sm:mt-16 sm:w-[calc(100%_-_40px)] sm:gap-10 lg:mt-20 lg:grid-cols-[626px_1fr] lg:items-start lg:gap-[176px]">
        <ContactInfoPanel
          items={contactCards}
          socialLinks={socialLinks}
          benefits={benefits}
        />

        <div className="rounded-[10px] border border-[#A3A3A3] bg-white/60 p-5 sm:p-10 lg:p-[50px]">
          <h2 className="font-[family-name:var(--font-outfit)] text-[32px] font-bold leading-[40px] text-[#012F42] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]">
            Request a Free Consultation
          </h2>

          <p className="mt-4 max-w-[614px] font-[family-name:var(--font-dm-sans)] text-[16px] leading-7 text-[#5B6472] sm:mt-6 sm:text-[18px]">
            Complete the form below and one of our dispatch specialists will
            contact you shortly.
          </p>

          <form className="mt-8 grid gap-5 lg:mt-10">
            <div className="grid gap-5 md:grid-cols-2">
              <ContactField label="Full Name" placeholder="John Doe" />

              <ContactField label="Phone Number" placeholder="(555) 000-0000" />

              <ContactField
                label="Email Address"
                placeholder="name@company.com"
                type="email"
              />

              <ContactField
                label="Company Name (OPTIONAL)"
                placeholder="Logistics LLC"
              />

              <ContactField label="MC Number" placeholder="MC# 000000" />

              <label className="block">
                <span className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold leading-6 text-[#012F42]">
                  Truck Type
                </span>

                <select className="mt-2 h-14 w-full rounded-[5px] border border-[#D4D4D4] bg-[#F8FAFC] px-4 font-[family-name:var(--font-dm-sans)] text-[16px] text-[#5B6472] outline-none transition-colors focus:border-[#FE8F02]">
                  <option>Box Truck</option>
                  <option>Dry Van</option>
                  <option>Flatbed</option>
                  <option>Reefer</option>
                  <option>Power Only</option>
                </select>
              </label>
            </div>

            <ContactField
              label="Preferred Lanes or States"
              placeholder="e.g. TX, GA, FL, or Midwest Region"
            />

            <label className="block">
              <span className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold leading-6 text-[#012F42]">
                Message
              </span>

              <textarea
                className="mt-2 min-h-[132px] w-full resize-y rounded-[5px] border border-[#D4D4D4] bg-[#F8FAFC] px-4 py-4 font-[family-name:var(--font-dm-sans)] text-[16px] text-[#111827] outline-none transition-colors placeholder:text-[#6B7280] focus:border-[#FE8F02]"
                placeholder="Tell us about your current operation..."
              />
            </label>

            <button
              type="submit"
              className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-[5px] bg-[#FE8F02] px-8 font-[family-name:var(--font-outfit)] text-[16px] font-medium uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95"
            >
              Request Free Consultation
            </button>
          </form>
        </div>
      </section>

      <TestimonialsSection />

      <section className="mx-auto mt-12 w-[calc(100%_-_32px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-5 py-10 sm:mt-16 sm:w-[calc(100%_-_40px)] sm:px-10 sm:py-12 lg:mt-20 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[462px] font-[family-name:var(--font-outfit)] text-[32px] font-bold leading-[40px] text-white sm:text-[42px] sm:leading-[54px] lg:text-[48px] lg:leading-[60px]">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-6 max-w-[395px] font-[family-name:var(--font-dm-sans)] text-[16px] leading-7 text-white/70 sm:mt-10 sm:text-[18px]">
            Contact us today and start running high-paying loads!
          </p>
        </div>

        <form className="mt-10 rounded-[10px] bg-white/10 p-6 lg:mt-0 lg:p-[50px]">
          <div className="grid gap-5 sm:grid-cols-2">
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
            className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95"
          >
            Get Started Now
          </button>
        </form>
      </section>
    </div>
  );
}

function ContactField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold leading-6 text-[#012F42]">
        {label}
      </span>

      <input
        type={type}
        className="mt-2 h-14 w-full rounded-[5px] border border-[#D4D4D4] bg-[#F8FAFC] px-4 font-[family-name:var(--font-dm-sans)] text-[16px] text-[#111827] outline-none transition-colors placeholder:text-[#6B7280] focus:border-[#FE8F02]"
        placeholder={placeholder}
      />
    </label>
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
              className="h-11 w-full appearance-none rounded-[5px] border border-white/5 bg-[#012F42]/60 px-5 pr-12 font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-white/70 outline-none transition-colors focus:border-[#FE8F02]"
            >
              <option value="" disabled>
                {placeholder}
              </option>
              <option value="box-truck">Box Truck</option>
            </select>

            <Image
              src="/contact/images/downArrow.png"
              alt=""
              width={14}
              height={14}
              className="pointer-events-none absolute right-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
            />
          </>
        ) : (
          <input
            className="h-11 w-full rounded-[5px] border border-white/5 bg-[#012F42]/60 px-5 font-[family-name:var(--font-dm-sans)] text-[14px] font-light text-white outline-none transition-colors placeholder:text-white/70 focus:border-[#FE8F02]"
            placeholder={placeholder}
          />
        )}
      </span>
    </label>
  );
}