import "server-only";

import configPromise from "@payload-config";
import { cacheLife, cacheTag } from "next/cache";
import { getPayload } from "payload";

const publishedWhere = { status: { equals: "published" as const } };

export async function getPosts(page = 1, limit = 12) {
  "use cache";
  cacheLife("days");
  cacheTag("posts");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "posts",
    depth: 1,
    limit,
    page,
    pagination: true,
    sort: "-publishedDate",
    where: publishedWhere,
    select: {
      title: true,
      slug: true,
      featureImage: true,
      publishedDate: true,
      metaDescription: true,
      category: true,
    },
  });
}

export async function getPostBySlug(slug: string) {
  "use cache";
  cacheLife("days");
  cacheTag("posts", `post:${slug}`);

  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 1,
    pagination: false,
    where: {
      and: [publishedWhere, { slug: { equals: slug } }],
    },
    select: {
      title: true,
      slug: true,
      author: true,
      category: true,
      featureImage: true,
      content: true,
      faqs: true,
      metaTitle: true,
      metaDescription: true,
      jsonSchema: true,
      publishedDate: true,
    },
  });

  return result.docs[0] ?? null;
}

export async function getPublishedPostSlugs() {
  "use cache";
  cacheLife("days");
  cacheTag("posts");

  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 0,
    limit: 1000,
    pagination: false,
    where: publishedWhere,
    select: { slug: true },
  });

  return result.docs.map(({ slug }) => slug);
}

export async function getCategories() {
  "use cache";
  cacheLife("days");
  cacheTag("categories");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "categories",
    depth: 0,
    limit: 100,
    pagination: false,
    sort: "name",
    select: { name: true, slug: true },
  });
}