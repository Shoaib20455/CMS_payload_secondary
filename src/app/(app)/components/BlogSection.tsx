import Image from "next/image";
import Link from "next/link";

type BlogSectionProps = {
  variant?: "absolute" | "flow";
  title?: string;
};

const smallPostTopClasses: Record<number, string> = {
  6676: "bb-dynamic-001",
  6886: "bb-dynamic-002",
  7096: "bb-dynamic-003",
};

const featuredPost = {
  title: "Why Box Truck Owners Lose Profitable Loads",
  date: "12 June 2026",
  img: "/Images/Rectangle 1131.png",
  desc: "Stop waiting 30-90 days for broker payments. Learn how freight factoring works, what to watch for, and when it makes sense for your trucking business.",
  href: "/blog/why-box-truck-owners-lose-profitable-loads",
};

const smallPosts = [
  {
    title: "How Dispatch Services Save Time for Owner-Operators",
    date: "10 June 2026",
    img: "/Images/Rectangle 1132.png",
    top: 6676,
    href: "/blog/how-dispatch-services-save-time",
  },
  {
    title: "Top Mistakes New Box Truck Businesses Make",
    date: "08 June 2026",
    img: "/Images/Rectangle 1133.png",
    top: 6886,
    href: "/blog/top-mistakes-new-box-truck-businesses",
  },
  {
    title: "How to Reduce Empty Miles and Increase Revenue",
    date: "03 June 2026",
    img: "/Images/Rectangle 1134.png",
    top: 7096,
    href: "/blog/reduce-empty-miles-increase-revenue",
  },
];

export default function BlogSection({
  variant = "absolute",
  title = "Box Truck Dispatching Blog",
}: BlogSectionProps) {
  if (variant === "flow") {
    return (
      <section className="mx-auto mb-20 mt-20 w-[calc(100%_-_40px)] max-w-[1520px]">
        <div className="mb-[62px] flex items-center justify-between gap-8 max-lg:flex-col max-lg:items-start">
          <h2 className="font-[family-name:var(--font-outfit)] text-[32px] font-bold leading-[40px] text-[#012F42] sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[58px]">
            {title}
          </h2>

          <Link
            href="/blog"
            className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] bg-[#FE8F02] px-5 py-2.5 font-[family-name:var(--font-outfit)] text-[18px] font-medium text-white transition-all duration-300 hover:bg-[#E07D02] max-sm:w-full"
          >
            View All Blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-[30px] xl:grid-cols-[742px_1fr]">
          <article className="min-h-[600px] rounded-[10px] border border-[#878B92] bg-white p-[30px] transition-transform duration-300 hover:scale-[1.02]">
  <div className="mb-5 h-[317px] w-full overflow-hidden rounded-[10px] max-sm:h-[220px]">
    <Image
      src={featuredPost.img}
      alt={featuredPost.title}
      width={682}
      height={317}
      className="h-full w-full object-cover"
    />
  </div>

  <PostDate date={featuredPost.date} />

  <h3 className="font-[family-name:var(--font-outfit)] text-[22px] font-semibold leading-[33px] text-[#012F42]">
    {featuredPost.title}
  </h3>

  <p className="my-5 font-[family-name:var(--font-dm-sans)] text-[18px] font-normal leading-7 text-[#595E68]">
    {featuredPost.desc}
  </p>

  <ReadMore href={featuredPost.href} />
</article>

          <div className="grid content-start gap-[30px]">
            {smallPosts.map((post) => (
              <article
  key={post.title}
  className="grid min-h-[180px] grid-cols-1 items-center gap-[30px] rounded-[10px] border border-[#878B92] bg-white p-[15px] transition-transform duration-300 hover:scale-[1.02] md:grid-cols-[220px_1fr]"
>
  <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] md:h-[150px] md:w-[220px]">
    <Image
      src={post.img}
      alt={post.title}
      fill
      sizes="(min-width: 768px) 220px, calc(100vw - 70px)"
      className="object-cover"
    />
  </div>

  <div>
    <PostDate date={post.date} />

    <h3 className="mb-5 font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-[29px] text-[#012F42]">
      {post.title}
    </h3>

    <ReadMore href={post.href} />
  </div>
</article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="bb-blog-001">
        <div className="bb-blog-002">Box Truck Dispatching Blog</div>

        <button className="bb-blog-003">View All Blogs</button>

        <article className="bb-blog-featured-card">
        <div className="bb-blog-004" />

        <Image
          className="bb-blog-005"
          src="/Images/Rectangle 1131.png"
          alt="Featured Blog Image"
          width={742}
          height={317}
        />

        <div className="bb-blog-006">
          <Image
            className="bb-blog-007"
            src="/Images/Rectangle 1130.png"
            alt="Date Bullet"
            width={14}
            height={14}
          />
          <span className="bb-blog-008">12 June 2026</span>
        </div>

        <div className="bb-blog-009">
          Why Box Truck Owners Lose Profitable Loads
        </div>

        <div className="bb-blog-010">
          Stop waiting 30-90 days for broker payments. Learn how freight
          factoring works, what to watch for, and when it makes sense for your
          trucking business.
        </div>

        <Link href="#blog" className="bb-blog-011">
          Read More
        </Link>

        <div className="bb-blog-012" />
        </article>

        {smallPosts.map((post, idx) => (
          <div
            key={idx}
            className={`bb-blog-013 ${smallPostTopClasses[post.top]}`}
          >
            <Image
              className="bb-blog-014"
              src={post.img}
              alt={post.title}
              width={220}
              height={150}
            />

            <div className="bb-blog-015">
              <Image
                className="bb-blog-016"
                src="/Images/Rectangle 1130.png"
                alt="Date Bullet"
                width={10}
                height={10}
              />
              <span className="bb-blog-008">{post.date}</span>
            </div>

            <div className="bb-blog-017">{post.title}</div>

            <Link href="#blog" className="bb-blog-018">
              Read More
            </Link>

            <div className="bb-blog-019" />
          </div>
        ))}
      </div>

      <section data-responsive-section="blog" className="bb-blog-020">
        <div className="bb-blog-021">
          <div className="bb-blog-022">
            <h2 className="bb-blog-023">Box Truck Dispatching Blog</h2>

            <button className="bb-blog-024">View All Blogs</button>
          </div>

          <div className="bb-blog-025">
            <article className="bb-blog-026">
              <Image
                className="bb-blog-027"
                src={featuredPost.img}
                alt="Featured Blog Image"
                width={742}
                height={317}
              />

              <div className="bb-blog-028">
                <div className="bb-blog-029">
                  <Image
                    className="bb-blog-030"
                    src="/Images/Rectangle 1130.png"
                    alt="Date Bullet"
                    width={14}
                    height={14}
                  />
                  <span className="bb-blog-031">{featuredPost.date}</span>
                </div>

                <h3 className="bb-blog-032">{featuredPost.title}</h3>

                <p className="bb-blog-033">{featuredPost.desc}</p>

                <Link href="#blog" className="bb-blog-034">
                  Read More
                </Link>
              </div>
            </article>

            <div className="bb-blog-035">
              {smallPosts.map((post) => (
                <article key={post.title} className="bb-blog-036">
                  <Image
                    className="bb-blog-037"
                    src={post.img}
                    alt={post.title}
                    width={220}
                    height={150}
                  />

                  <div className="bb-blog-038">
                    <div className="bb-blog-029">
                      <Image
                        className="bb-blog-039"
                        src="/Images/Rectangle 1130.png"
                        alt="Date Bullet"
                        width={10}
                        height={10}
                      />
                      <span className="bb-blog-040">{post.date}</span>
                    </div>

                    <h3 className="bb-blog-041">{post.title}</h3>

                    <Link href="#blog" className="bb-blog-042">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PostDate({ date }: { date: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-[14px] font-normal text-[#595E68]">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FE8F02]" />
      {date}
    </div>
  );
}

function ReadMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="font-[family-name:var(--font-outfit)] text-[18px] font-medium capitalize text-[#FE8F02] underline underline-offset-8 transition-colors duration-300 hover:text-[#E07D02]"
    >
      Read More
    </Link>
  );
}
