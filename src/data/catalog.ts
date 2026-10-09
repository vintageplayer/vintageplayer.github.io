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
				line: "Foster low-pressure, genuine connection between families living in different cities and across generations.",
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
	/** The first tag places the idea in the list; any tag matches the filter. */
	tags: string[];
	text: string;
}

// Kept in order of first tag so each group's ideas sit together.
export const ideas: Idea[] = [
	{
		tags: ["Sports", "Social"],
		text: "Finding a casual pickup game in a new city shouldn’t depend on already being in the right WhatsApp group.",
	},
	{
		tags: ["Social"],
		text: "An in-person group or date activity planner that works around your mood and budget, even at the last minute.",
	},
	{
		tags: ["Relationships"],
		text: "Building and maintaining professional and personal relationships, especially as a founder.",
	},
	{
		tags: ["Startups"],
		text: "Bringing event spaces, organizers and sponsors together to host fun, in-person startup events in SF.",
	},
	{
		tags: ["Startups"],
		text: "A content growth machine that turns trending content on a topic into new content for a brand or product.",
	},
	{
		tags: ["Fashion"],
		text: "An app to manage your wardrobe and discover new outfit ideas for your style.",
	},
	{
		tags: ["Self"],
		text: "An app or community to practise conversations and build social skills, like handling difficult ones.",
	},
	{
		tags: ["Community"],
		text: "Grounded, practical advice for men, and a community for guidance from people who have been through the same situations.",
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
