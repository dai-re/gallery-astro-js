import { defineCollection, z } from 'astro:content';

const allImages = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      ap: z.number(),
      iso: z.number(),
      upload: z.string(),
      take: z.string(),
      description: z.string(),
      cover: image().optional(),
      lens: z.string(),
      focus: z.string(),
      model: z.object({
        name: z.string().optional(),
        url: z.string().optional()
      })
    })
});

export const collections = {
  i: allImages
};
