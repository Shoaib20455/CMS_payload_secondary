import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_thumbnail_url" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_thumbnail_width" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_thumbnail_height" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_thumbnail_mime_type" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_thumbnail_filesize" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_thumbnail_filename" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_card_url" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_card_width" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_card_height" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_card_mime_type" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_card_filesize" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_card_filename" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_article_url" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_article_width" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_article_height" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_article_mime_type" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_article_filesize" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_article_filename" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_hero_url" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_hero_width" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_hero_height" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_hero_mime_type" varchar;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_hero_filesize" numeric;
    ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "sizes_hero_filename" varchar;
    CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_filename_idx" ON "media" ("sizes_thumbnail_filename");
    CREATE INDEX IF NOT EXISTS "media_sizes_card_filename_idx" ON "media" ("sizes_card_filename");
    CREATE INDEX IF NOT EXISTS "media_sizes_article_filename_idx" ON "media" ("sizes_article_filename");
    CREATE INDEX IF NOT EXISTS "media_sizes_hero_filename_idx" ON "media" ("sizes_hero_filename");
    CREATE INDEX IF NOT EXISTS "posts_published_date_idx" ON "posts" ("published_date");
    CREATE INDEX IF NOT EXISTS "posts_status_idx" ON "posts" ("status");
    CREATE INDEX IF NOT EXISTS "posts_category_idx" ON "posts" ("category_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP INDEX IF EXISTS "media_sizes_thumbnail_filename_idx";
    DROP INDEX IF EXISTS "media_sizes_card_filename_idx";
    DROP INDEX IF EXISTS "media_sizes_article_filename_idx";
    DROP INDEX IF EXISTS "media_sizes_hero_filename_idx";
    DROP INDEX IF EXISTS "posts_published_date_idx";
    DROP INDEX IF EXISTS "posts_status_idx";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_url";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_width";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_height";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_mime_type";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_filesize";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_filename";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_url";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_width";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_height";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_mime_type";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_filesize";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_filename";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_article_url";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_article_width";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_article_height";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_article_mime_type";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_article_filesize";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_article_filename";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_hero_url";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_hero_width";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_hero_height";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_hero_mime_type";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_hero_filesize";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_hero_filename";
  `);
}