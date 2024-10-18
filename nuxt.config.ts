// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "node-server",
    prerender: {
      routes: ["/"],
      ignore: ["/blog", "/blog/*"],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
