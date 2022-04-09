import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
    tailwindConfig: "./tailwind.config.js",
    integrations: [react()],
});
