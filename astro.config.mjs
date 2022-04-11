import { defineConfig } from "astro/config";

const config = {
    title: "Torque Money - DeFi The Norm",
    description: "Home of high leverage and the highest sustainable yield farming rewards, powered 100% by DeFi.",
    themeColor: "#921ebb",
    siteURL: "https://torque.money",
    bannerURL: "https://i.imgur.com/voyXWCK.png",
    twitterHandle: "@torque_money",
    connectURL: "https://linktr.ee/torque_money",
    appURL: "https://app.torque.money",
    gaId: "G-MKW6VC08TF",
};

// https://astro.build/config
export default defineConfig({
    misc: config,
    site: config.siteURL,
});
