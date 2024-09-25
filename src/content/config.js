import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    twitterHandle: z.string().default('@timocodes'),
    image: z.union([
      image(),
      z.string().url(),
      z.string().startsWith('/'),
    ]),
    description: z.string(),
  })
});

const resourcesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'resources': resourcesCollection,
};