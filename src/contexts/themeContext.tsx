import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within ThemeContext.Provider"
    );
  }

  return context;
}
