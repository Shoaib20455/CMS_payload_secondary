import Image from "next/image";
import Link from "next/link";

const includeCards = [
  {
    title: "Load Search and Matching",
    body: "We identify loads that match your equipment type, preferred routes, and schedule.",
  },
  {
    title: "Rate Negotiation",
    body: "Our dispatchers negotiate competitive rates to maximize your earnings on every trip.",
  },
  {
    title: "Broker Communication",
    body: "We coordinate directly with brokers and shippers, eliminating unnecessary phone calls and administrative work.",
  },
  {
    title: "Rate Confirmation Management",
    body: "We review and process all rate confirmations to ensure accuracy before dispatch.",
  },
  {
    title: "Route Planning",
    body: "We help minimize deadhead miles and create efficient load sequences for better profitability.",
  },
  {
    title: "24/7 Dispatch Support",
    body: "Questions or issues on the road? Our team is available to assist whenever you need support.",
  },
];

const benefits = [
  {
    title: "Higher Revenue",
    body: "Better-paying loads and stronger rate negotiations help increase your earnings.",
    image: "/loadBooking/Rectangle 1135.webp",
  },
  {
    title: "Reduced Deadhead Miles",
    body: "Strategic load planning keeps your truck loaded and productive.",
    image: "/loadBooking/Rectangle 1136.webp",
  },
  {
    title: "More Time to Drive",
    body: "Spend less time searching load boards and more time generating revenue.",
    image: "/loadBooking/Rectangle 1137.png",
  },
  {
    title: "Access to Trusted Brokers",
    body: "We work with reputable brokers and verify creditworthiness before booking.",
    image: "/loadBooking/Rectangle 1138.png",
  },
  {
    title: "Consistent Freight Opportunities",
    body: "Our goal is to keep your truck moving with steady freight throughout the year.",
    image: "/loadBooking/Rectangle 1139.png",
  },
];

const chooseCards = [
  {
    title: "Experienced Dispatch Professionals",
    body: "Our dispatchers understand freight markets, lane trends, and broker negotiations.",
    icon: "/loadBooking/Rectangle 1524.png",
  },
  {
    title: "Personalized Service",
    body: "Every truck operates differently. We tailor load strategies to your preferences.",
    icon: "/loadBooking/Rectangle 1524 (1).png",
  },
  {
    title: "Transparent Communication",
    body: "No hidden fees. No surprises. Just clear communication and dedicated support.",
    icon: "/loadBooking/Rectangle 1524 (2).png",
  },
  {
    title: "Nationwide Coverage",
    body: "We book freight across all 48 contiguous states.",
    icon: "/loadBooking/Rectangle 1524 (3).png",
  },
  {
    title: "Profit-Focused Approach",
    body: "Our priority is helping you maximize revenue while maintaining efficiency.",
    icon: "/loadBooking/Rectangle 1524 (4).png",
  },
];

const processSteps = [
  {
    title: "Tell Us About Your Truck",
    body: "Share your equipment type, operating regions, and availability.",
  },
  {
    title: "We Search for Loads",
    body: "Our team checks available freight and filters opportunities around your lanes and goals.",
  },
  {
    title: "We Negotiate Rates",
    body: "We contact brokers, negotiate pricing, and protect your margin before booking.",
  },
  {
    title: "Load Confirmation",
    body: "We verify the details, paperwork, appointment times, and requirements before dispatch.",
  },
  {
    title: "Stay Loaded",
    body: "We plan ahead so your next load is ready before your current one is finished.",
  },
];

const industries = [
  "General Freight",
  "Refrigerated Freight",
  "Construction Materials",
  "Manufacturing",
  "Retail Distribution",
  "Automotive",
  "Food & Beverage",
  "Consumer Goods",
];

const faqs = [
  "How quickly can you find a load?",
  "Do you negotiate rates?",
  "Can you book loads nationwide?",
  "Do you work with new authorities?",
  "What types of box trucks do you dispatch?",
  "How do you find loads for my truck?",
  "What types of box trucks do you dispatch?",
  "How do you find loads for my truck?",
];

export default function LoadBookingPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20 pt-8 lg:pt-20">
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42]">
        <div className="relative min-h-[500px] overflow-hidden px-6 py-14 sm:px-10 lg:px-[100px] lg:py-[83px]">
          <Image
            src="/loadBooking/loadBooking_hero.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1560px) calc(100vw - 40px), 1520px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#012F42]/90 via-[#012F42]/70 to-[#012F42]/30" />

          <div className="relative z-10 max-w-[1156px]">
            <h1 className="font-[family-name:var(--font-outfit)] text-[40px] font-bold capitalize leading-[50px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
              Load Booking Services for Owner-Operators and Trucking Companies
            </h1>

            <p className="mt-8 font-[family-name:var(--font-dm-sans)] text-[20px] font-bold text-white">
              Find Better Loads. Earn More Per Mile.
            </p>

            <div className="mt-5 max-w-[1143px] space-y-7 font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-white sm:text-[20px]">
              <p>
                Our professional load booking service helps owner-operators and
                fleet owners find profitable freight, negotiate better rates,
                and reduce empty miles.
              </p>

              <p>
                We work directly with brokers and shippers to secure loads that
                fit your equipment, preferred lanes, and business goals. Our
                team helps keep your wheels moving and your income growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-[30px] lg:h-[700px] lg:grid-cols-[857px_626px]">
        <div className="flex min-w-0 flex-col">
          <h2 className="font-[family-name:var(--font-outfit)] text-[38px] font-bold leading-[48px] text-[#012F42] sm:text-[42px] sm:leading-[52px] lg:text-[48px]">
            What Is Load Booking?
          </h2>

          <div className="mt-8 space-y-7 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#575D67]">
            <p>
              Load booking is much more than simply finding freight. It requires
              continuous monitoring of load boards, evaluating available
              opportunities, negotiating competitive rates, verifying broker
              credibility, securing rate confirmations, and coordinating every
              detail of the shipment process. A well-managed load booking
              strategy helps maximize revenue while reducing downtime and
              operational disruptions.
            </p>

            <p>
              Our experienced dispatch specialists handle the entire load
              booking process from start to finish. We actively search for
              high-paying loads, negotiate on your behalf, verify broker and
              shipper information, and ensure all documentation is accurate
              before dispatch. Every load is carefully selected to match your
              equipment, preferred routes, availability, and revenue goals.
            </p>

            <p>
              We also coordinate pickup and delivery schedules, communicate with
              brokers and shippers, and provide real-time updates throughout the
              process. By managing the logistics and paperwork, we allow drivers
              and fleet owners to focus on the road while maintaining consistent
              freight opportunities, minimizing empty miles, and improving
              overall profitability.
            </p>
          </div>

          <Image
            src="/loadBooking/loadbookingtruck_2.webp"
            alt="Box truck load booking"
            width={857}
            height={296}
            className="mt-10 h-auto w-full rounded-[10px] object-contain lg:mt-auto lg:h-[296px]"
          />
        </div>

        <Image
          src="/loadBooking/loadbookingtruck_1.webp"
          alt="Dispatcher reviewing load booking details"
          width={626}
          height={700}
          className="h-auto w-full rounded-[10px] object-contain lg:h-[700px]"
        />
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] gap-5 lg:grid-cols-4">
        <div className="flex min-h-[223px] items-center rounded-[10px] bg-[#012F42] p-8 sm:p-[50px] lg:col-span-2">
          <h2 className="font-[family-name:var(--font-outfit)] text-[38px] font-bold leading-[48px] text-white lg:text-[48px] lg:leading-[58px]">
            Our Load Booking Services Include
          </h2>
        </div>

        {includeCards.map((card) => (
          <InfoCard key={card.title} title={card.title} body={card.body} />
        ))}
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[720px] text-center font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[52px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Benefits of Our Load Booking Service
        </h2>

        <div className="mt-[70px] grid gap-[30px] lg:grid-cols-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              wide={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="mx-auto max-w-[720px] text-center font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[52px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Why Choose Our Load Booking Team?
        </h2>

        <div className="mt-[70px] grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {chooseCards.map((card) => (
            <article
              key={card.title}
              className="group h-[288px] rounded-[10px] border border-[#878B92] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]"
            >
              <div className="h-2.5 rounded-t-[10px] bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />

              <div className="p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-[5px] border border-[#012F42] transition-all duration-300 group-hover:border-[#FE8F02] group-hover:shadow-[0_0_18px_rgba(254,143,2,0.20)]">
                  <Image
                    src={card.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-8 text-[#012F42]">
                  {card.title}
                </h3>

                <p className="mt-5 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[52px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          How Our Process Works
        </h2>

        <div className="mt-[70px] grid gap-5 lg:grid-cols-2">
          <Image
            src="/loadBooking/Rectangle 1093.webp"
            alt="Dispatch process"
            width={750}
            height={518}
            className="h-auto w-full rounded-[10px] object-cover lg:h-[518px]"
          />

          <div className="space-y-3">
            {processSteps.map((step, index) => (
              <details
                key={step.title}
                className="group min-h-[80px] rounded-[10px] border border-[#111827]/50 bg-white p-5 transition-[border-color,box-shadow] duration-200 [&[open]]:min-h-[146px] [&[open]]:border-[#FE8F02] [&[open]]:shadow-[0_8px_22px_rgba(254,143,2,0.14)]"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE8F02]">
                  <span className="font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-8 text-[#012F42]">
                    <span className="text-[#FE8F02]">Step {index + 1}:</span>{" "}
                    {step.title}
                  </span>

                  <PlusIcon />
                </summary>

                <p className="mt-4 max-w-[520px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
                  {step.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-20 min-h-[610px] overflow-hidden">
        <Image
          src="/loadBooking/Rectangle 1078.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#012F42]/60" />

        <div className="relative z-10 mx-auto flex min-h-[610px] w-[calc(100%_-_40px)] max-w-[1520px] flex-col items-center justify-center py-16">
          <h2 className="font-[family-name:var(--font-outfit)] text-[42px] font-bold text-[#F8FAFC] lg:text-[48px]">
            Industries We Serve
          </h2>

          <div className="mt-[70px] flex flex-wrap justify-center gap-5">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-[5px] bg-white/10 px-12 py-6 font-[family-name:var(--font-outfit)] text-[26px] font-semibold capitalize text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FE8F02] hover:shadow-[0_10px_26px_rgba(254,143,2,0.28)] lg:text-[30px]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[10px] bg-[#012F42] lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-[50px]">
          <h2 className="max-w-[641px] font-[family-name:var(--font-outfit)] text-[40px] font-bold capitalize leading-[50px] text-[#FE8F02] lg:text-[48px] lg:leading-[60px]">
            Ready to Keep Your Truck Loaded?
          </h2>

          <p className="mt-10 max-w-[636px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white">
            Stop spending hours searching load boards and negotiating with
            brokers. Let our experienced dispatch team handle the load booking
            process while you focus on driving and growing your business.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white no-underline transition-all duration-300 hover:scale-[1.03] hover:bg-[#E07D02] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE8F02]"
            >
              Start Dispatching Today
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-[#FE8F02] no-underline transition-all duration-300 hover:scale-[1.03] hover:bg-[#FE8F02] hover:text-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE8F02]"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>

        <Image
          src="/loadBooking/Rectangle 1117.webp"
          alt="Loaded box truck"
          width={760}
          height={585}
          className="h-full min-h-[360px] w-full object-cover"
        />
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[52px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-[70px] grid gap-3 lg:grid-cols-2">
          {faqs.map((question, index) => (
            <details
              key={`${question}-${index}`}
              className="group min-h-[80px] rounded-[10px] border border-[#111827]/50 bg-white px-5 py-4 transition-[border-color,box-shadow] duration-200 [&[open]]:border-[#FE8F02] [&[open]]:shadow-[0_8px_22px_rgba(254,143,2,0.14)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[5px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-[#012F42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE8F02]">
                {question}
                <PlusIcon />
              </summary>

              <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-[16px] leading-6 text-[#111827]/70">
                Our dispatch team reviews your truck, lanes, schedule, and
                market conditions to recommend the best available option.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-3 flex min-h-[256px] w-[calc(100%_-_40px)] max-w-[1520px] flex-col items-center justify-center rounded-[10px] bg-[#012F42] px-6 py-[30px] text-center sm:px-10">
        <h2 className="font-[family-name:var(--font-outfit)] text-[40px] font-bold capitalize leading-[50px] text-white lg:text-[48px] lg:leading-[55px]">
          Grow Your Business Faster
        </h2>

        <p className="mx-auto mt-5 max-w-[636px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white">
          From load booking to payment follow-up, we handle the hard work behind
          the scenes so you can stay focused on the road ahead.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex h-12 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE8F02]"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="group min-h-[223px] rounded-[10px] border border-[#111827]/50 bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]">
      <div className="h-2.5 rounded-t-[10px] bg-[#012F42] transition-colors duration-300 group-hover:bg-[#FE8F02]" />

      <div className="p-5">
        <h3 className="font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-8 text-[#012F42]">
          {title}
        </h3>

        <p className="mt-8 font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-[#111827]/70">
          {body}
        </p>
      </div>
    </article>
  );
}

function BenefitCard({
  benefit,
  wide,
}: {
  benefit: { title: string; body: string; image: string };
  wide: boolean;
}) {
  return (
    <article
      className={`group relative h-[400px] overflow-hidden rounded-[10px] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(254,143,2,0.22)] ${
        wide ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <Image
        src={benefit.image}
        alt={benefit.title}
        fill
        sizes="(max-width: 1023px) calc(100vw - 40px), (max-width: 1560px) 50vw, 745px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#012F42]/90 to-[#012F42]/35" />

      <div className="absolute inset-x-[30px] bottom-[54px]">
        <h3 className="font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-8 text-white">
          {benefit.title}
        </h3>

        <p className="mt-5 max-w-[400px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-6 text-white/70">
          {benefit.body}
        </p>
      </div>
    </article>
  );
}

function PlusIcon() {
  return (
    <span className="relative h-4 w-4 shrink-0">
      <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded bg-[#012F42]" />
      <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 rounded bg-[#012F42] transition-transform duration-200 group-open:rotate-90" />
    </span>
  );
}
