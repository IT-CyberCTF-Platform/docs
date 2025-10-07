// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/fonts",
  ],
  github: false,
  socials: {
    github: "https://github.com/IT-CyberCTF-Platform",
  },
});
