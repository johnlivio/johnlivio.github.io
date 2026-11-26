import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { messages } from "./languages";

const fallbackLng = ["en"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en", // Idioma padrão definido como inglês
    fallbackLng: fallbackLng,
    debug: false,
    defaultNS: ['translations'],
    ns: ['translations'],
    resources: messages
  });

export { i18n };