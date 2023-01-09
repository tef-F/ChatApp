import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ChatMessage from "../screens/ChatMessage";
import MainStackNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  // screenOptions={screenOptionStyle
  return (
    <NavigationContainer
      theme={{ colors: { secondaryContainer: "rgba(52, 52, 52, 0.0)" } }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={MainStackNavigator} />
        <Stack.Screen name="ChatMessage" component={ChatMessage} />
        {/* <Stack.Screen name="About" component={About} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
