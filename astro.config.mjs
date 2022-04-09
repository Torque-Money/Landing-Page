import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
    server: {
        tailwindConfig: "./tailwind.config.js",
    },
    integrations: [react()],
});
