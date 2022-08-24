import fr from '../src/locales/fr'
import en from '../src/locales/en'

export default {
  locales: [
    { code: 'fr', iso: 'fr-FR', file: 'fr/index.ts' },
    { code: 'en', iso: 'en-US', file: 'en/index.ts' },
  ],
  defaultLocale: 'en',
  vuex: { syncLocale: true },
  strategy: 'no_prefix',
  lazy: true,
  langDir: 'locales/',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      fr,
      en,
    },
  },
}
