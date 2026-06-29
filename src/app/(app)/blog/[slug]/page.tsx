import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Post } from "@/payload-types";
import BlogSection from "../../components/BlogSection";
import ReadyTruckSection from "../../components/ReadyTruckSection";
import { getPostBySlug, getPublishedPostSlugs } from "@/lib/payload-data";

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || undefined,
      url: `/blog/${post.slug}`,
    },
  };
}
function isRichText(value: unknown): value is SerializedEditorState {
  return Boolean(
    value &&
      typeof value === "object" &&
      "root" in value &&
      (value as { root?: unknown }).root,
  );
}

type PostFaq = NonNullable<Post["faqs"]>[number];
type BlogFaq = Omit<PostFaq, "answer"> & { answer: SerializedEditorState };

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const author =
    post.author && typeof post.author === "object"
      ? (post.author as unknown as Record<string, unknown>)
      : null;
  const category =
    post.category && typeof post.category === "object"
      ? (post.category as unknown as Record<string, unknown>)
      : null;
  const featureImage =
    post.featureImage && typeof post.featureImage === "object"
      ? (post.featureImage as unknown as Record<string, unknown>)
      : null;

  const authorName =
    (author?.name as string) || (author?.email as string) || "Professional";
  const categoryName = (category?.name as string) || "Category";
  const categorySlug = (category?.slug as string) || "";
  const featureImageUrl = (featureImage?.url as string) || "";
  const featureImageAlt = (featureImage?.alt as string) || post.title;
  const content = isRichText(post.content) ? post.content : null;
  const faqs = ((Array.isArray(post.faqs) ? post.faqs : []).filter(
    (faq) =>
      Boolean(faq?.question && isRichText(faq.answer)),
  ) as unknown as BlogFaq[]);
  const faqMidpoint = Math.ceil(faqs.length / 2);
  const faqColumns = [faqs.slice(0, faqMidpoint), faqs.slice(faqMidpoint)];

  return (
    <div className="bg-[#F8FAFC] pb-px text-[#012F42]">
      <h1 className="sr-only">{post.title}</h1>

      <section className="mx-auto mt-20 flex w-[calc(100%_-_40px)] max-w-[1200px] items-center justify-between gap-8 max-sm:flex-col max-sm:items-stretch">
        <div className="flex min-w-0 items-center gap-5">
          <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#012F42] font-[family-name:var(--font-outfit)] text-[28px] font-bold text-white">
            {authorName.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h2 className="truncate font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-6 text-[#012F42]">
              {authorName}
            </h2>
            <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-[16px] leading-6 text-[#575D67]">
              Professional
            </p>
          </div>
        </div>

        <Link
          href={categorySlug ? `/blog/category/${categorySlug}` : "/blog"}
          className="inline-flex h-12 min-w-44 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium text-white no-underline transition-all duration-300 hover:scale-[1.03] hover:bg-[#E07D02] active:scale-95 max-sm:w-full"
        >
          {categoryName}
        </Link>
      </section>

      <section className="mx-auto mt-[30px] aspect-[2/1] w-[calc(100%_-_40px)] max-w-[1200px] overflow-hidden rounded-2xl bg-[#E2E8F0]">
        {featureImageUrl ? (
          <Image
            src={featureImageUrl}
            alt={featureImageAlt}
            width={1200}
            height={600}
            className="h-full w-full object-contain"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 text-center font-[family-name:var(--font-dm-sans)] text-[18px] text-[#575D67]">
            Featured image unavailable
          </div>
        )}
      </section>

      <section className="mx-auto mt-[30px] w-[calc(100%_-_40px)] max-w-[1200px]">
        <div className="flex h-12 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium text-white">
          Table of Contents
        </div>

        {content && (
          <article className="mt-[30px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-[#575D67] [&_a]:font-medium [&_a]:text-[#FE8F02] [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#FE8F02] [&_blockquote]:pl-5 [&_h2]:mb-3 [&_h2]:mt-7 [&_h2]:font-[family-name:var(--font-dm-sans)] [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:leading-8 [&_h2]:text-[#012F42] [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-[family-name:var(--font-dm-sans)] [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:leading-8 [&_h3]:text-[#012F42] [&_li]:mb-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_p]:mb-4 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-7">
            <RichText data={content} />
          </article>
        )}
      </section>

      {faqs.length > 0 && (
        <section className="mx-auto mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
          <h2 className="text-center font-[family-name:var(--font-outfit)] text-[38px] font-bold leading-[48px] text-[#012F42] sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[58px]">
            Frequently Asked Questions
          </h2>

          <div className="mt-[62px] grid gap-3 lg:grid-cols-2 lg:gap-x-5">
            {faqColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="grid content-start gap-3">
                {column.map((faq, index) => (
                  <details
                    key={faq.id || `${columnIndex}-${index}-${faq.question}`}
                    className="group min-h-20 rounded-[10px] border border-[#111827]/50 bg-white px-5 py-4 transition-[border-color,box-shadow] duration-200 [&[open]]:border-[#FE8F02] [&[open]]:shadow-[0_8px_22px_rgba(254,143,2,0.14)]"
                  >
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 rounded-[5px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-8 text-[#012F42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE8F02]">
                      <span>{faq.question}</span>
                      <PlusIcon />
                    </summary>

                    <div className="pb-2 pr-8 font-[family-name:var(--font-dm-sans)] text-[16px] leading-7 text-[#575D67] [&_a]:text-[#FE8F02] [&_li]:mb-1 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6">
                      <RichText data={faq.answer} />
                    </div>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      <section
        className={`mx-auto flex min-h-64 w-[calc(100%_-_40px)] max-w-[1520px] flex-col items-center justify-center rounded-[10px] bg-[#012F42] px-6 py-[30px] text-center sm:px-10 ${
          faqs.length > 0 ? "mt-3" : "mt-20"
        }`}
      >
        <h2 className="font-[family-name:var(--font-outfit)] text-[38px] font-bold capitalize leading-[48px] text-white sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[55px]">
          Grow Your Business Faster
        </h2>
        <p className="mx-auto mt-5 max-w-[636px] font-[family-name:var(--font-dm-sans)] text-[18px] leading-7 text-white">
          From load booking to payment follow-up, we handle the hard work behind
          the scenes so you can stay focused on the road ahead.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex h-12 min-w-40 items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-[#E07D02] active:scale-95"
        >
          Get Started
        </Link>
      </section>

      <ReadyTruckSection variant="flow" />
      <BlogSection variant="flow" title="Box Truck Dispatching Related Blog" />
    </div>
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
