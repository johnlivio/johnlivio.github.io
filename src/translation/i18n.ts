import i18n from "i18next"; 
import LanguageDetector from "i18next-browser-languagedetector"; 
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { messages } from "./languages";


const fallbackLng = [ "pt" ]; 

i18n 
  . use ( Backend ) 
   . use ( LanguageDetector ) 
   . use (initReactI18next) 
   . init ({ 
    fallbackLng: fallbackLng, 
   debug: true,
   defaultNS: ['translations'],
   ns: ['translations'], 
   resources: messages
  })
     
  export { i18n }; 