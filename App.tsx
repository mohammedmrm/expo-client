import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import { default as mapping } from "./assets/mapping.json";
import themes from "./assets/theme.json";
import { ThemeContext } from "./src/contexts/themeContext";
import { I18nProvider } from "./src/i18n/I18nContext";
import { AppNavigator } from "./src/navigaters/AppNavigater";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady] = useFonts({
    "f-Regular": require("./assets/fonts/Cairo-Regular.ttf"),
    "f-ExtraBold": require("./assets/fonts/Cairo-ExtraBold.ttf"),
    "f-Bold": require("./assets/fonts/Cairo-Bold.ttf"),
    "f-SemiBold": require("./assets/fonts/Cairo-SemiBold.ttf"),
    "f-Light": require("./assets/fonts/Cairo-Light.ttf"),
    "f-Medium": require("./assets/fonts/Cairo-Medium.ttf"),
    "f-ExtraLight": require("./assets/fonts/Cairo-ExtraLight.ttf"),
  });
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);
  if (!appIsReady) return null;
  return (
    <I18nProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[theme], ...themes }}
          customMapping={{ ...eva.mapping, ...mapping }}
        >
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </I18nProvider>
  );
}
