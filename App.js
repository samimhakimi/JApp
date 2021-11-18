import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import AppNavigator from "./src/navigation/Navigator";
import { AppLoading } from "expo";
import { NativeBaseProvider } from "native-base";
import { navigationRef, isReadyRef } from "./src/navigation/Navigator";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  ActivityIndicator,
} from "react-native-paper";

import { ThemeContext } from "./src/contexts/context";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

// import { Provider } from "mobx-react";
import { Provider } from "react-redux";
import { store } from "./src/stores/store";
import { useEffect } from "react";

toggleTheme: () => {
  setIsDarkTheme((isDarkTheme) => !isDarkTheme);
};
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#fafafa",
      text: "#000000",
      lazyDark: "#FFF",
      toggleDark: "#FFF",
      toggleThumb: "#FFF",
      modalBackground: "light",
      messageSearch: "#9dd5c6",
      converastionBackground: "#F4F4F4",
      conversationHourText: "#63697b",
      gradStart: "#bfe0d8",
      gradBetween: "#bfbfbf",
      gradEnd: "#b8e1e9",
      sep: "#72bda9",
      drawer: "#dadada",
      sto: "#92ddc9",
      error: "red",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#000000",
      text: "#ffffff",
      lazyDark: "#2b2b2b",
      toggleDark: "#707070",
      toggleThumb: "#707070",
      modalBackground: "dark",
      messageSearch: "#FFF",
      converastionBackground: "#2b2b2b",
      conversationHourText: "#FFF",
      gradStart: "#001515",
      gradBetween: "#000",
      gradEnd: "#000",
      sep: "#005546",
      drawer: "#1b1b1b",
      sto: "#FFF",
      error: "red",
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  const themeContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <PaperProvider theme={theme}>
          <ThemeContext.Provider value={themeContext}>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                isReadyRef.current = true;
              }}
              theme={theme}
            >
              <AppNavigator />
            </NavigationContainer>
          </ThemeContext.Provider>
        </PaperProvider>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
