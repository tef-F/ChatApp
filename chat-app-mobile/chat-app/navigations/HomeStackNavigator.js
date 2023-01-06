import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ChatMessage from "../components/message/ChatMessage";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  // screenOptions={screenOptionStyle
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChatMessage" component={ChatMessage}/>
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
