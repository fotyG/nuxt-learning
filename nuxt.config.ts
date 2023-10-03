// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@formkit/auto-animate/nuxt", "@nuxt/ui"],
  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  //   layoutTransition: { name: "layout", mode: "out-in" },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  appConfig: {
    ui: {
      primary: "yellow",
      gray: "cool",
    },
  },
});
