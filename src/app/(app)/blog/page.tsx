import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getCategories, getPosts } from "@/lib/payload-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Box Truck Dispatching Blog",
  description:
    "Guides and dispatch insights for box truck owner-operators and fleets, covering load selection, dispatch support, compliance, and revenue growth.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Box Truck Dispatching Blog",
    description:
      "Step-by-step resources to help trucking businesses choose better loads, reduce empty miles, and stay compliant.",
    url: "/blog",
    type: "website",
  },
};

const fallbackCategories = [
  "Load Booking",
  "Dispatching",
  "Compliance",
  "Rate Negotiation",
  "Owner Operators",
];

const fallbackPosts = [
  {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 249@2x.webp",
    href: "/blog/why-box-truck-owners-lose-profitable-loads",
  },
  {
    title: "Insurance Verification Best Practices",
    description:
      "Ensure patient coverage before appointments to reduce claim denials.",
    date: "12 June 2026",
    image: "/Images/Rectangle 250@2x.webp",
    href: "/blog/how-dispatch-services-save-time",
  },
  {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 251@2x.webp",
    href: "/blog/top-mistakes-new-box-truck-businesses",
  },
   {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 249@2x.webp",
    href: "/blog/why-box-truck-owners-lose-profitable-loads",
  },
  {
    title: "Insurance Verification Best Practices",
    description:
      "Ensure patient coverage before appointments to reduce claim denials.",
    date: "12 June 2026",
    image: "/Images/Rectangle 250@2x.webp",
    href: "/blog/how-dispatch-services-save-time",
  },
  {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 251@2x.webp",
    href: "/blog/top-mistakes-new-box-truck-businesses",
  },
   {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 249@2x.webp",
    href: "/blog/why-box-truck-owners-lose-profitable-loads",
  },
  {
    title: "Insurance Verification Best Practices",
    description:
      "Ensure patient coverage before appointments to reduce claim denials.",
    date: "12 June 2026",
    image: "/Images/Rectangle 250@2x.webp",
    href: "/blog/how-dispatch-services-save-time",
  },
  {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 251@2x.webp",
    href: "/blog/top-mistakes-new-box-truck-businesses",
  },
   {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 249@2x.webp",
    href: "/blog/why-box-truck-owners-lose-profitable-loads",
  },
  {
    title: "Insurance Verification Best Practices",
    description:
      "Ensure patient coverage before appointments to reduce claim denials.",
    date: "12 June 2026",
    image: "/Images/Rectangle 250@2x.webp",
    href: "/blog/how-dispatch-services-save-time",
  },
  {
    title: "Maximizing Reimbursement for Teletherapy",
    description:
      "how to properly bill for telehealth mental health services and maximize your reimbursements.",
    date: "12 June 2026",
    image: "/Images/Rectangle 251@2x.webp",
    href: "/blog/top-mistakes-new-box-truck-businesses",
  },
];

export default async function BlogPage() {
  const [postResult, categoryResult] = await Promise.all([getPosts(1, 12), getCategories()]);
  const categories = categoryResult.docs.length ? categoryResult.docs.map(({ name }) => name) : fallbackCategories;
  const posts = postResult.docs.length
    ? postResult.docs.map((post) => {
        const media = post.featureImage && typeof post.featureImage === "object" ? post.featureImage : null;
        return {
          title: post.title,
          description: post.metaDescription || "Read the latest dispatch insights for owner-operators and fleets.",
          date: post.publishedDate ? new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(post.publishedDate)) : "",
          image: media?.sizes?.card?.url || media?.url || "/Images/Rectangle 249@2x.webp",
          href: `/blog/${post.slug}`,
        };
      })
    : fallbackPosts;

  return (
    <div className="bg-[#F8FAFC] pb-20">
      <section className="mx-auto mt-8 w-[calc(100%_-_40px)] max-w-[1520px] overflow-hidden rounded-[20px] bg-[#012F42] lg:mt-20">
  <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-r from-[#012F42]/95 to-[#012F42]/70 px-6 py-16 sm:px-10 lg:min-h-[500px] lg:px-[100px] lg:py-[156px]">
    <Image
      src="/Images/blog_hero.webp"
      alt="Box truck dispatch blog hero"
      fill
      priority
      sizes="(min-width: 1280px) 1520px, 100vw"
      className="absolute inset-0 object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#012F42]/95 to-[#012F42]/70" />

    <div className="relative z-10 max-w-[900px]">
      <h1 className="font-[family-name:var(--font-outfit)] text-[42px] font-bold capitalize leading-[52px] text-white sm:text-[54px] sm:leading-[64px] lg:text-[60px] lg:leading-[70px]">
        Guides &amp; Dispatch Insights
      </h1>

      <p className="mt-8 max-w-[770px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-white sm:text-[20px]">
        Step-by-step resources designed to help owner-operators and fleets
        improve load selection, increase revenue per mile, and stay compliant
        on every run.
      </p>
    </div>
  </div>
</section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-[40px] font-bold leading-[50px] text-[#012F42] lg:text-[48px] lg:leading-[58px]">
          Our Learning Resources
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href="#resources"
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium text-white no-underline transition-colors hover:bg-[#E07D02]"
            >
              {category}
            </Link>
          ))}
        </div>

        <div
          id="resources"
          className="mt-14 grid gap-x-5 gap-y-[70px] sm:grid-cols-2 md:grid-cols-3"
        >
          {posts.map((post, index) => (
            <article
              key={`${post.href}-${index}`}
              className="group overflow-hidden rounded-[10px] bg-[#F8FAFC]"
            >
              <Link href={post.href} className="block no-underline">
                <div className="relative aspect-[50/33] overflow-hidden rounded-[10px] bg-[#E2E8F0]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1280px) 500px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="pt-5">
                  <PostDate date={post.date} />

                  <h3 className="mt-3 max-w-[390px] font-[family-name:var(--font-outfit)] text-[18px] font-semibold leading-7 text-[#012F42] transition-colors group-hover:text-[#FE8F02] lg:text-[20px] lg:leading-8">
                    {post.title}
                  </h3>

                  <p className="mt-4 max-w-[470px] font-[family-name:var(--font-dm-sans)] text-[16px] leading-6 text-[#5B6472] lg:text-[18px]">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <nav
          className="mt-16 flex flex-wrap items-center justify-center gap-4 font-[family-name:var(--font-outfit)] text-[24px] font-semibold text-[#012F42]"
          aria-label="Blog pagination"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FE8F02] text-[30px] leading-none text-white">
            1
          </span>
          {[2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
            <Link
              key={page}
              href="#resources"
              className="text-[#012F42] no-underline transition-colors hover:text-[#FE8F02]"
            >
              {page}
            </Link>
          ))}
          <Link
            href="#resources"
            className="inline-flex items-center gap-2 text-[#012F42] no-underline transition-colors hover:text-[#FE8F02]"
          >
            Next
            <ArrowRightIcon />
          </Link>
        </nav>
      </section>

      <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px] rounded-[10px] bg-[#012F42] px-6 py-12 sm:px-10 lg:grid lg:min-h-[535px] lg:grid-cols-[1fr_720px] lg:gap-20 lg:px-[100px] lg:py-[50px]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-[462px] font-[family-name:var(--font-outfit)] text-[42px] font-bold leading-[54px] text-white lg:text-[48px] lg:leading-[60px]">
            Ready to Find Better Loads?
          </h2>

          <p className="mt-10 max-w-[395px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white/70">
            Stop spending hours searching load boards. Let our experienced
            dispatch team handle the freight while you focus on driving and
            growing your business.
          </p>
        </div>

        <form className="mt-10 rounded-[10px] bg-white/10 p-6 lg:mt-0 lg:p-[50px]">
          <div className="grid gap-5 sm:grid-cols-2">
            <CtaField label="First Name" placeholder="Enter First Name" />
            <CtaField label="Last Name" placeholder="Enter Last Name" />
            <CtaField label="Phone Number" placeholder="+1 (000) 123-1234" />
            <CtaField label="Email Address" placeholder="email@gmail.com" />
            <CtaField label="Truck Type" placeholder="Enter Truck Type" />
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

function PostDate({ date }: { date: string }) {
  return (
    <div className="mt-7 flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-[14px] leading-4 text-[#FE8F02]">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FE8F02]" />
      {date}
    </div>
  );
}

function CtaField({
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

function ArrowRightIcon() {
  return (
    <svg
      className="h-6 w-6"
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
