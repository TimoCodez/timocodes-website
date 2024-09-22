import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    twitterHandle: z.string().default('@timocodes'), // Add this line
    image: z.union([
      image(),
      z.string().url(),
      z.string().startsWith('/'),
    ]),
    description: z.string(),
  })
});

export const collections = {
  'blog': blogCollection,
};