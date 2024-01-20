import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './localization/en.json';
import arabic from './localization/ar.json';

const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
  });


  export default i18n;