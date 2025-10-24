// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxt/fonts",
  ],
  site: {
    name: "SecSpac Docs",
  },
  nitro: {
    preset: "static",
  },
  robots: { robotsTxt: false },
  app: {
    baseURL: "/docs/",
    buildAssetsDir: 'assets',
  },
});
