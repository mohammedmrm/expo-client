import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import { default as mapping } from "./assets/mapping.json";

import theme from "./assets/theme.json";
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
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
      customMapping={mapping}
    >
      <AppNavigator />
    </ApplicationProvider>
  );
}
