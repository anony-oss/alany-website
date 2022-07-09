export const i18n = {
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'en'
      },
    locales: [
      {
        name: 'Russian',
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
}