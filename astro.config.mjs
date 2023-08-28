import { defineConfig, squooshImageService } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  experimental: {
    assets: true,
  },
  image: {
    service: squooshImageService(),
    domains: ["mediacloud.theweek.com"],
  },
});
