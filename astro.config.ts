import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site.config";

export default defineConfig({
	site: siteConfig.url,
	integrations: [sitemap()],
});
