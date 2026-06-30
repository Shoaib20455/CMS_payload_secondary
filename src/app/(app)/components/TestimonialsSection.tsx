"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

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

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const orderedTestimonials = testimonials.map(
    (_, index) => testimonials[(currentIndex + index) % testimonials.length],
  );

  const canMoveCards = () => {
    const cards = cardsRef.current;
    if (!cards) return false;

    const firstCard = cards.querySelector<HTMLElement>("article");
    if (!firstCard) return false;

    const gap = Number.parseFloat(getComputedStyle(cards).columnGap) || 20;
    const cardWidth = firstCard.offsetWidth;
    const containerWidth = cards.clientWidth;

    const visibleCards = Math.floor((containerWidth + gap) / (cardWidth + gap));

    return testimonials.length > visibleCards;
  };

  const moveCards = async (direction: "previous" | "next") => {
    const cards = cardsRef.current;
    if (!cards || isAnimatingRef.current || !canMoveCards()) return;

    isAnimatingRef.current = true;

    const firstCard = cards.querySelector<HTMLElement>("article");
    const gap = Number.parseFloat(getComputedStyle(cards).columnGap) || 20;
    const distance = (firstCard?.offsetWidth ?? 0) + gap;
    const exitDistance = direction === "next" ? -distance : distance;

    await cards.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(${exitDistance}px)` },
      ],
      { duration: 250, easing: "ease-in", fill: "forwards" },
    ).finished;

    flushSync(() => {
      setCurrentIndex((index) =>
        direction === "next"
          ? (index + 1) % testimonials.length
          : (index - 1 + testimonials.length) % testimonials.length,
      );
    });

    cards.getAnimations().forEach((animation) => animation.cancel());

    await cards.animate(
      [
        { transform: `translateX(${-exitDistance}px)` },
        { transform: "translateX(0)" },
      ],
      { duration: 300, easing: "ease-out" },
    ).finished;

    isAnimatingRef.current = false;
  };

  return (
    <section className="mx-auto mt-12 w-[calc(100%_-_32px)] max-w-[1520px] sm:mt-16 sm:w-[calc(100%_-_40px)] lg:mt-20">
      <div className="flex flex-wrap items-center justify-center gap-5 text-center sm:justify-between sm:text-left">
        <h2 className="font-[family-name:var(--font-outfit)] text-[32px] font-semibold leading-[40px] text-[#012F42] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]">
          What Our Clients Say
        </h2>

        <div className="flex translate-y-2 gap-2">
          <button
            type="button"
            onClick={() => void moveCards("previous")}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[5px] bg-[#012F42] text-white transition-colors hover:bg-[#012F42]/90"
            aria-label="Previous testimonial"
          >
            <ArrowLeftIcon />
          </button>

          <button
            type="button"
            onClick={() => void moveCards("next")}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[5px] bg-[#FE8F02] text-white transition-colors hover:bg-[#E07D02]"
            aria-label="Next testimonial"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div
        ref={cardsRef}
        className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4"
      >
        {orderedTestimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="group overflow-hidden rounded-[10px] border border-[#111827]/50 bg-white/20 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8F02] hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(254,143,2,0.16)]"
          >
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