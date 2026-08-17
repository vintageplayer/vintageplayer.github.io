import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const timeline = defineCollection({
	loader: glob({ base: "./content/timeline", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		period: z.string(),
		category: z.enum(["professional", "before-graduation", "life"]),
		description: z.string(),
		hasDetail: z.boolean().default(false),
		order: z.number(),
	}),
});

const project = defineCollection({
	loader: glob({ base: "./content/projects", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		period: z.string(),
		role: z.string(),
		type: z.string(),
		date: z.string(),
		updated: z.string(),
		description: z.string(),
		order: z.number(),
	}),
});

const list = defineCollection({
	loader: glob({ base: "./content/lists", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		label: z.string(),
		count: z.number(),
		updated: z.string(),
		description: z.string(),
		order: z.number(),
		items: z.array(
			z.object({
				title: z.string(),
				note: z.string(),
				href: z.string().optional(),
			}),
		),
	}),
});

export const collections = { timeline, project, list };
