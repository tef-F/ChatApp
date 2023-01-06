import * as React from "react";
import { Text, View } from "react-native";
import { IconButton, TextInput, TouchableRipple } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Contacts from "../screens/Contacts";
import { theme } from "../theme";

import HomeStackNavigator  from "./HomeStackNavigator";

const Tab = createMaterialBottomTabNavigator();

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const MainStackNavigator = () => {
  return (
    <NavigationContainer
      theme={{ colors: { secondaryContainer: "rgba(52, 52, 52, 0.0)" } }}
    >
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={theme.colors.primary}
        barStyle={{...theme.borderTop, backgroundColor: "white"}}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: "Chat",
            tabBarBadge: 5,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "message" : "message-outline"}
                color={color}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: "Contacts",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "account-multiple" : "account-multiple-outline"}
                color={color}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "cog" : "cog-outline"}
                color={color}
                size={28}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
