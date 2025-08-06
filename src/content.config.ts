import { z, defineCollection } from "astro:content";
import { WorkTags } from "./types";

const work = defineCollection({
  schema: z.object({
    date: z.string(),
    name: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    youtubeUrl: z.string().optional(),
    image: z.string(),
    tags: z
      .array(
        z.enum(["", ...Object.keys(WorkTags).filter((x) => isNaN(Number(x)))])
      )
      .default([]),
    links: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          style: z.enum(["primary", "secondary"]).default("primary"),
        })
      )
      .optional()
      .default([]),
  }),
});

const comments = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    comment: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { work, comments };
