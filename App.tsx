import { StatusBar } from "expo-status-bar";
import React from "react";
import { PublicRoutes } from "./src/routes/public.routes";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Arimo_400Regular, Arimo_500Medium } from "@expo-google-fonts/arimo";
import { theme } from "./src/global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        translucent={false}
        backgroundColor={theme.colors.background}
      />
      <PublicRoutes />
    </NavigationContainer>
  );
}
