import React, { useState } from "react";
import LoginStackNavigator from "./navigations/LoginStackNavigator";
import MainTabNavigator from "./navigations/MainTabNavigator";
import HomeStackNavigator from "./navigations/HomeStackNavigator";

import { Provider, useDispatch, useSelector } from "react-redux";
import { AuthProvider } from "./contexts/JWTContext";
import store from "./redux/store";
import useAuth from "./hooks/useAuth";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppScreen></AppScreen>
      </AuthProvider>
    </Provider>
  );
}

const AppScreen = () => {
  //handle screen
  const {isAuthenticated} = useAuth();
  return isAuthenticated ? (
    <HomeStackNavigator></HomeStackNavigator>
  ) : (
    <LoginStackNavigator></LoginStackNavigator>
  );
};
