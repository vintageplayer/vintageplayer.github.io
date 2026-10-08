import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const timeline = defineCollection({
	loader: glob({ base: "./content/timeline", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		period: z.string(),
		category: z.enum(["professional", "before-graduation", "life"]),
		order: z.number(),
	}),
});

export const collections = { timeline };
