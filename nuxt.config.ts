import { dependencies as depVer } from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/sanity", "@nuxtjs/google-fonts", "nuxt-svgo"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: 'Ui',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      })
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    componentName: 'ColorScheme',
    storageKey: 'nuxt-color-mode',
    classSuffix: ''
  },
  sanity: { 
    projectId: '944avg5w',
    dataset: 'production'
  },
  runtimeConfig: {
    public: {
      CFPAGES_BRANCH: process.env.CF_PAGES_BRANCH,
      CFPAGES_HASH: process.env.CF_PAGES_COMMIT_SHA,
      GODEJS_VERSION: depVer['gode.js']
    }
  }
})