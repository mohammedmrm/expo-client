import { resources } from "@/i18n/resources";
import * as Localization from "expo-localization"; // Import expo-localization
import i18n from "i18next";
import React, { createContext, useContext, useRef } from "react";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: resources,
  //debug: true,
  lng: Localization.getLocales()[0].languageCode || "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: true,
  },
});

const I18nContext = createContext({
  i18n,
  setlng: (language: string) => {},
  theme: "light",
  toggleTheme: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const supportedLocales = useRef(Object.keys(resources));
  const setlng = (lng: string) => {
    if (supportedLocales.current.includes(lng)) {
      i18n.changeLanguage(lng);
    }
  };
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <I18nContext.Provider
      value={{
        i18n,
        setlng,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export function useI18nContext() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18nContext must be used within MainProvider");
  }

  return context;
}
