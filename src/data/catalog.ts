// Content for the Projects, Ideas and Domains pages. Publish only confirmed facts.

export interface Project {
	name: string;
	href?: string;
	status: string;
	line?: string;
}

export const projectGroups: { title: string; projects: Project[] }[] = [
	{
		title: "Building",
		projects: [
			{
				name: "DevScan",
				href: "https://devscan.ai/",
				status: "early, building",
				line: "Devtool discovery, comparison, onboarding and purchases.",
			},
			{
				name: "SearchGuests",
				href: "https://searchguests.com/",
				status: "live",
				line: "High-quality information on the people attending Luma events, to find the ones best fit for your goals.",
			},
			{
				name: "FamilyDrawer",
				status: "in development, not yet usable",
				line: "Low-pressure, genuine connection between families living in different cities and across generations.",
			},
		],
	},
	{
		title: "Not maintained",
		projects: [
			{
				name: "JiffyScan",
				href: "https://jiffyscan.xyz/",
				status: "online, not maintained",
				line: "Analytics for smart-wallet companies. Market leader, $600k ARR in six months.",
			},
			{
				name: "DevRanker",
				href: "https://devranker.com/",
				status: "parked",
				line: "Developer-adoption signals from millions of public GitHub repositories, as leads for data-infra companies. 40 customers.",
			},
		],
	},
];

export interface Idea {
	category: string;
	text: string;
}

// Kept in category order so each category's ideas sit together.
export const ideas: Idea[] = [
	{
		category: "Social",
		text: "Finding a casual pickup game in a new city shouldn’t depend on already being in the right WhatsApp group.",
	},
	{
		category: "Social",
		text: "Date and friend plans built around doing something together, not another round of drinks.",
	},
	{ category: "Work", text: "Keeping professional relationships warm without turning people into a CRM." },
	{
		category: "Startups",
		text: "Helping sponsors and event organizers find each other, and the events actually worth showing up to.",
	},
	{
		category: "Startups",
		text: "Turning what’s trending into content, at a pace a small team can keep up with.",
	},
	{
		category: "Agents",
		text: "Agentic shopping that starts from something you already do, like knowing what’s in your wardrobe.",
	},
	{ category: "Self", text: "A place to practise hard conversations and see how you come across." },
	{
		category: "Community",
		text: "Grounded, practical advice for men, from people who have been through the same things.",
	},
];

export interface Domain {
	name: string;
	href?: string;
	line?: string;
}

export const domainGroups: { title: string; domains: Domain[] }[] = [
	{
		title: "Used for a project",
		domains: [
			{ name: "DevScan.ai", href: "https://devscan.ai/", line: "Selling to coding agents. Building now." },
			{ name: "SearchGuests.com", href: "https://searchguests.com/", line: "Enriched guest lists for conferences." },
			{ name: "FamilyDrawer.com", line: "A calm place for family updates. In development." },
			{
				name: "DevRanker.com",
				href: "https://devranker.com/",
				line: "Developer-adoption signals for data-infra companies. Parked.",
			},
			{ name: "LetsIRL.com", href: "https://letsirl.com/" },
			{ name: "LLMVisible.com", href: "https://llmvisible.com/" },
			{ name: "ArtsOfBaniya.com", href: "/", line: "This site." },
		],
	},
	{
		title: "Waiting for an idea",
		domains: [
			{ name: "ExperimentOS.ai", line: "Running and keeping track of product and AI experiments." },
			{ name: "HonestCustomer.com", line: "Candid customer feedback and interviews." },
			{ name: "WarmNudge.com", line: "Gentle reminders to follow up with people." },
			{ name: "DailyStandupBuddy.com", line: "A lightweight assistant for daily standups." },
			{ name: "MomProof.ai", line: "Products and instructions anyone can follow." },
			{ name: "CryptoInheritance.xyz", line: "Passing crypto assets on to family." },
			{ name: "yc.app", line: "A short name for something for founders." },
			{ name: "KookieZillennial.com", line: "A name looking for its publication or brand." },
		],
	},
];
