import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';


i18n

.use(Backend)

// .use(LanguageDetector)

.use(initReactI18next)

.init({
    fallbackLng: 'ua',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    backend:{
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

  });


export default i18n;


// Импортируйте указанные выше файлы в i18n.js и добавьте ресурсы и lng в i18n init.

//  import translationEN from "../src/translationEN.json";
//  import translationDE from "../src/translationDE.json";

//  const resources = {
//    en: {
//      translation: translationEN
//    },
//    de: {
//      translation: translationDE
//    }
//  };

//  i18n
//   .use(Backend)    
//   .use(LanguageDetector)    
//   .use(initReactI18next)    
//   .init({
//    resources,
//    lng: "en",