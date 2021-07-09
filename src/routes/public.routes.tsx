import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Saves } from "../screens/Saves";

const { Screen, Navigator } = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: "#fafafa" },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Saves" component={Saves} />
    </Navigator>
  );
};
