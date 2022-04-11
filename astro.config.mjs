import { defineConfig } from "astro/config";

const config = {
    title: "Torque Money - DeFi The Norm",
    description: "Home of high leverage and the highest sustainable yield farming rewards, powered 100% by DeFi.",
    themeColor: "#921ebb",
    siteURL: "https://torque.money",
    bannerURL: "https://i.imgur.com/IzQ9Jvl.png",
    twitterHandle: "@torque_money",
};

// https://astro.build/config
export default defineConfig({
    misc: config,
    site: config.siteURL,
});
