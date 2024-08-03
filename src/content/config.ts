import { defineCollection, z } from 'astro:content';

const allImages = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      af: z.number(),
      iso: z.number(),
      upload: z.string(),
      take: z.string(),
      description: z.string(),
      cover: image(),
      lens: z.string(),
      focus: z.string()
    })
});

export const collections = {
  i: allImages
};
