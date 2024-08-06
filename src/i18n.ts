import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

// Initialize i18next
i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: "en", // Set default language
    fallbackLng: "en", // Use English if the current language doesn't have a translation
    interpolation: {
      escapeValue: false, // React already safeguards from xss
    },
  });

export default i18n;
