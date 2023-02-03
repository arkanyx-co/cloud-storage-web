// @ts-check
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./src/shared/lib/i18n/locales')
      : '/src/shared/lib/i18n/locales',
};
