import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    categories: z.union([z.string(), z.array(z.string())]).transform(val =>
      Array.isArray(val) ? val : [val]
    ).optional().default(['uncategorized']),
    image: z.union([
      z.string(),
      z.object({
        feature: z.string().optional(),
        credit: z.string().optional(),
        creditlink: z.string().optional()
      })
    ]).optional(),
    math: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
