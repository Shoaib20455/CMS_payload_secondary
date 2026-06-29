import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Box Truck Dispatching Pricing",
  description:
    "Transparent box truck dispatching pricing, dispatch fee ranges, and benefits for owner-operators and fleets.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Box Truck Dispatching Pricing",
    description:
      "See box truck dispatching fee ranges, expected gross revenue ranges, and the benefits of working with our dispatch team.",
    url: "/pricing",
    type: "website",
  },
};

const feeRows = [
  {
    truckType: "Box Truck",
    ratePerMile: "$1.50 - $2.20",
    weeklyGross: "$5,500 - $7,500",
    dispatchFee: "6% - 8%",
  },
];

const advantages = [
  {
    title: "24/7 Support",
    description:
      "We are available around the clock to assist you and keep you on the road.",
  },
  {
    title: "Best Load Options",
    description:
      "Access high-paying loads from trusted brokers and shippers across the nation.",
  },
  {
    title: "Reliable & Transparent",
    description:
      "No hidden fees. We believe in clear communication and honest service.",
  },
  {
    title: "More Miles, More Profit",
    description:
      "Our dispatching solutions are designed to maximize your miles and earnings.",
  },
];

const benefits = [
  "Experienced dispatchers with industry expertise",
  "Strong network of brokers and quality loads",
  "Dedicated support for owner-operators and fleets",
  "Customized solutions to fit your business needs",
  "Committed to your success on every mile",
];

export default function PricingPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20 pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[420px] overflow-hidden px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[122px]">
          <Image
            src="/pricing/Frame 4 (1).webp"
            alt="Box truck dispatching pricing hero"
            fill
            priority
            sizes="(max-width: 1560px) calc(100vw - 40px), 1520px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,47,66,0.90)_0%,rgba(1,47,66,0.30)_89%)]" />

          <div className="relative z-10 max-w-[967px]">
            <h1 className="font-[family-name:var(--font-outfit)] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Reliable Dispatching. More Miles. More Profit.
            </h1>

            <p className="mt-8 max-w-[687px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-white sm:text-[20px]">
              We specialize in box truck dispatching, connecting you with the
              best loads at competitive rates. Our goal is to keep your trucks
              moving and your business growing with reliable support 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[547px] text-center font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Box Truck Dispatching Fee Chart
        </h2>

        <div className="mt-[70px] overflow-x-auto rounded-[10px] border border-[#012F42]">
          <table className="w-full min-w-[760px] table-fixed border-collapse">
            <thead className="bg-[#FE8F02] text-white">
              <tr>
                {[
                  "Truck Type",
                  "Rate Per Mile",
                  "Weekly Gross",
                  "Dispatch Fee",
                ].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="h-16 border-r border-[#012F42] px-6 text-left font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 last:border-r-0 lg:px-[50px]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {feeRows.map((row) => (
                <tr key={row.truckType}>
                  {[
                    row.truckType,
                    row.ratePerMile,
                    row.weeklyGross,
                    row.dispatchFee,
                  ].map((value) => (
                    <td
                      key={value}
                      className="h-16 border-r border-t border-[#012F42] px-6 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70 last:border-r-0 lg:px-[50px]"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Our Key Advantages
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {advantages.map((advantage) => (
            <article
  key={advantage.title}
  className="group min-h-[223px] overflow-hidden rounded-[10px] border border-[#111827]/50 bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]"
>
  <div className="h-2.5 bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />

  <div className="p-5">
    <h3 className="min-h-16 font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
      {advantage.title}
    </h3>

    <p className="mt-6 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
      {advantage.description}
    </p>
  </div>
</article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,49.35%)] lg:items-center lg:gap-[60px]">
  <div>
    <h2 className="font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
      Why Choose Us?
    </h2>

    <p className="mt-8 max-w-[710px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
      Our experienced dispatchers work hard to keep your trucks loaded and
      profitable. We focus on finding quality freight opportunities while
      reducing downtime and unnecessary deadhead miles.
    </p>

    <h3 className="mt-12 font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-8 text-[#012F42]">
      Benefits of Working With Us
    </h3>

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

  <div className="group relative aspect-[750/434] overflow-hidden rounded-[10px] bg-[#E2E8F0] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(254,143,2,0.22)]">
    <Image
      src="/pricing/Rectangle 1686.webp"
      alt="Dispatcher supporting box truck business growth"
      fill
      sizes="(max-width: 1023px) calc(100vw - 40px), 750px"
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
    />
  </div>
</section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[462px] font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[54px] text-white lg:text-[48px] lg:leading-[60px]">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-10 max-w-[395px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white/70">
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
              src="/pricing/Rectangle 1510.png"
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
    <Image
      src="/pricing/Icon.svg"
      alt=""
      width={20}
      height={20}
      className="h-5 w-5 shrink-0"
    />
  );
}
