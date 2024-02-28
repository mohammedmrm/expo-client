import { resources } from "@/i18n/resources";
import * as Localization from "expo-localization"; // Import expo-localization
import i18n from "i18next";
import React, { createContext, useContext, useRef } from "react";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: resources,
  //debug: true,
  lng: Localization.getLocales()[0].languageCode || "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: true,
  },
});

const MainContext = createContext({
  i18n,
  setlng: (language: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const MainProvider: React.FC<Props> = ({ children }) => {
  const supportedLocales = useRef(["ar", "en", "ku"]);
  const setlng = (lng: string) => {
    if (supportedLocales.current.includes(lng)) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <MainContext.Provider
      value={{
        i18n,
        setlng,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export function useMainContext() {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext must be used within MainProvider");
  }

  return context;
}
