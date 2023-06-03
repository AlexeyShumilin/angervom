// nuxt.config.js
const en = require("./locales/en.json");
const fi = require("./locales/fi.json");
const ru = require("./locales/ru.json");

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "angervo",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto&family=Syne&display=swap"

      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Quattrocento+Sans&family=Roboto&family=Syne:wght@400;500&display=swap"

      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,300;1,400&family=Quattrocento+Sans&family=Roboto&family=Syne:wght@400;500&display=swap"

      }
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/i18n
    ["nuxt-i18n", {
      locales: ["en", "fi", "ru"],
      defaultLocale: "en",
      strategy: "prefix",
      detectBrowserLanguage: false,
      vueI18n: {
        fallbackLocale: "en",
        messages: { en, fi, ru }
      },
      routes: {
        "/": {
          en: "/",
          fi: "/koti",
          ru: "/главная"
        },
        "/about": {
          en: "/about",
          fi: "/tietoja",
          ru: "/о-нас"
        },
        "/contact": {
          en: "/contact",
          fi: "/yhteystiedot",
          ru: "/контакты"
        }
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}


};


