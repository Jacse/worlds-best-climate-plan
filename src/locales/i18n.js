import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './fr';
import dk from './dk';

const resources = {
  fr,
  dk,
};

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources,
    lng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    react: {
      wait: true,
      // bindI18n: 'languageChanged',
      // bindI18nStore: '',
      // transEmptyNodeValue: '',
      // transSupportBasicHtmlNodes: true,
      // transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    },
  });

export default i18n;
