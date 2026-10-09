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
	/** "building" gets an accent label; "retired" strikes the line through. */
	status?: "building" | "retired";
	/** Shown after the line and never struck through, e.g. what replaced a retired idea. */
	note?: string;
}

export const domainGroups: { title: string; domains: Domain[] }[] = [
	{
		title: "Used for a project",
		domains: [
			{
				name: "DevScan.ai",
				href: "https://devscan.ai/",
				status: "building",
				line: "Agents for sign-ups and payments.",
			},
			{ name: "SearchGuests.com", href: "https://searchguests.com/", line: "Search and filter the attendees of a Luma event." },
			{
				name: "FamilyDrawer.com",
				line: "Low-pressure connection between family generations living in different cities.",
			},
			{ name: "DevRanker.com", href: "https://devranker.com/", status: "retired", line: "Developer-adoption signals for data-infra companies." },
			{ name: "ArtsOfBaniya.com", href: "/", line: "This site." },
		],
	},
	{
		title: "Waiting for an idea",
		domains: [
			{ name: "yc.app", line: "Parked for something built for founders." },
			{ name: "LetsIRL.com", href: "https://letsirl.com/", line: "Improve the in-person networking experience." },
			{
				name: "LLMVisible.com",
				href: "https://llmvisible.com/",
				line: "Boost the accurate presence of brands within language models.",
			},
			{ name: "KookieZillennial.com", line: "In case I ever decide to share my experiences, filter-free." },
			{ name: "ExperimentOS.ai", line: "Running and keeping track of product and AI experiments." },
			{ name: "WarmNudge.com", line: "Nudges to help maintain your professional and personal relationships." },
			{ name: "HonestCustomer.com", line: "Candid customer feedback and interviews." },
			{
				name: "MomProof.ai",
				status: "retired",
				line: "Inspired by The Mom Test.",
				note: "Replaced by HonestCustomer.com.",
			},
			{
				name: "DailyStandupBuddy.com",
				line: "A community for solo founders and the self-employed: accountability, routine and company.",
			},
			{ name: "CryptoInheritance.xyz", line: "Passing crypto assets on to family." },
		],
	},
];

export interface SideQuest {
	when: string;
	text: string;
}

// Newest first, like the home page ledger.
export const sideQuests: SideQuest[] = [
	{ when: "2021–22", text: "Won $30k+ in prizes across national and international hackathons." },
	{
		when: "2018",
		text: "Named one of India’s 33 brightest engineers, out of 26,000+, in the first Economic Times Campus Stars.",
	},
	{ when: "Age 15", text: "Sold 5 bitcoins for $5." },
	{ when: "Age 13", text: "Taught myself to program, and have been building apps ever since." },
	{ when: "Age 12", text: "Ran a rubber-band reselling business at a 400% profit." },
	{ when: "Age 8", text: "Started my first business: a stall at the Diwali fair, every year." },
];
