import type { Metadata } from "next";
import Image from "next/image";

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

const testimonials = [
  {
    name: "James Carter",
    role: "Owner Operator",
    quote:
      "Consistent loads with better rates every week. I no longer waste time searching or negotiating.",
    active: true,
    avatarSrc: "/contact/images/James Carter.png",
    avatarAlt: "James Carter icon",
  },
  {
    name: "Sophia Williams",
    role: "Fleet Owner",
    quote:
      "Dispatch runs smoothly without stress. My trucks stay loaded, and downtime has dropped significantly.",
    avatarSrc: "/contact/icons/Sophia Williams.svg",
    avatarAlt: "Sophia Williams icon",
  },
  {
    name: "David Thompson",
    role: "Flatbed Driver",
    quote:
      "Strong rate negotiation and proper load planning. I am seeing higher RPM and fewer empty miles.",
    avatarSrc: "/contact/images/David Thompson.png",
    avatarAlt: "David Thompson icon",
  },
  {
    name: "Emily Johnson",
    role: "New Authority",
    quote:
      "Got loads quickly after setup. Clear guidance and full support made the process simple.",
    avatarSrc: "/contact/icons/Emily Johnson.svg",
    avatarAlt: "Emily Johnson icon",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] pt-5 pb-20 sm:pt-8 lg:pt-20">
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
        <div>
          <div className="rounded-[10px] bg-[#012F42] px-5 pb-7 pt-8 sm:px-10 sm:pt-12 sm:pb-8 lg:px-[50px] lg:pt-[32px] lg:pb-[38px]">
            <h2 className="font-[family-name:var(--font-outfit)] text-[26px] font-semibold leading-9 text-white sm:text-[30px] sm:leading-10">
              Contact Information
            </h2>

            <div className="mt-8 grid gap-6 lg:mt-10">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="flex min-h-24 items-center gap-4 rounded-[10px] bg-white/20 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center">
                    <Image
                      src={card.iconSrc}
                      alt={card.iconAlt}
                      width={42}
                      height={42}
                      className="h-10 w-10 object-contain"
                    />
                  </span>

                  <div>
                    <h3 className="font-[family-name:var(--font-outfit)] text-[18px] font-semibold leading-7 text-white sm:text-[20px] sm:leading-8">
                      {card.label}
                    </h3>

                    <p className="mt-1 break-words font-[family-name:var(--font-dm-sans)] text-[15px] leading-6 text-white sm:text-[18px] sm:leading-7">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-[family-name:var(--font-outfit)] text-[26px] font-semibold leading-9 text-white sm:mt-12 sm:text-[30px] sm:leading-10 lg:mt-[74px]">
              Connect with me
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-5 sm:gap-6">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-80"
                  aria-label={`Follow us on ${item.label}`}
                >
                  {item.label === "Twitter" && item.bgSrc ? (
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <Image
                        src={item.bgSrc}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-contain"
                        aria-hidden="true"
                      />

                      <Image
                        src={item.iconSrc}
                        alt={`${item.label} icon`}
                        width={18}
                        height={18}
                        className="relative z-10 h-[18px] w-[18px] object-contain"
                      />
                    </span>
                  ) : (
                    <Image
                      src={item.iconSrc}
                      alt={`${item.label} icon`}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-[30px] rounded-[10px] border border-[#A3A3A3] bg-white p-5 sm:p-8">
            <h2 className="font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
              Why Work With Us?
            </h2>

            <ul className="mt-6 grid gap-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 font-[family-name:var(--font-dm-sans)] text-[16px] leading-6 text-[#5B6472]"
                >
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
              className="mt-2 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-8 font-[family-name:var(--font-outfit)] text-[16px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#E07D02]"
            >
              Request Free Consultation
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-12 w-[calc(100%_-_32px)] max-w-[1520px] sm:mt-16 sm:w-[calc(100%_-_40px)] lg:mt-20">
        <div className="flex flex-wrap items-center justify-center gap-5 text-center sm:justify-between sm:text-left">
          <h2 className="font-[family-name:var(--font-outfit)] text-[32px] font-semibold leading-[40px] text-[#012F42] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]">
            What Our Clients Say
          </h2>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-[#012F42] text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon />
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-[#FE8F02] text-white"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
  key={testimonial.name}
  className="group overflow-hidden rounded-[10px] border border-[#111827]/50 bg-white/20 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]"
>
  <div className="h-2.5 bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />

  <div className="px-7 py-8">
    <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#012F42]">
      <Image
        src={testimonial.avatarSrc}
        alt={testimonial.avatarAlt}
        width={96}
        height={96}
        className="h-full w-full object-cover"
      />
    </div>

    <div className="mx-auto mt-5 h-0.5 w-40 rounded-full bg-[#A3A3A3]" />

    <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
      {testimonial.name}
    </h3>

    <p className="font-[family-name:var(--font-dm-sans)] text-[14px] font-medium leading-6 text-[#FE8F02]">
      {testimonial.role}
    </p>

    <div className="mt-6 flex justify-center gap-1 text-[#FE8F02]">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>

    <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-[16px] leading-7 text-[#5B6472] sm:text-[18px]">
      {testimonial.quote}
    </p>
  </div>
</article>
          ))}
        </div>
      </section>

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
            className="mt-6 flex h-12 w-full items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white transition-colors hover:bg-[#E07D02]"
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

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#FE8F02]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2 2.9 6.26 6.85.82-5.06 4.69 1.34 6.76L12 17.14l-6.03 3.39 1.34-6.76-5.06-4.69 6.85-.82L12 2z" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
