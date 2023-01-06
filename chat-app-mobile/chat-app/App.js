import React, { useState } from "react";
import LoginStackNavigator from "./navigations/LoginStackNavigator";
import MainTabNavigator from "./navigations/MainTabNavigator";

// import {Provider, useDispatch, useSelector} from 'react-redux';
// import store from './redux/store';

export default function App() {
  return (
    // <Provider store={store}>
    <AppScreen>
      
    </AppScreen>
    // </Provider>
  );
}

const AppScreen = () => {
  //handle screen
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <MainTabNavigator></MainTabNavigator>
  ) : (
    <LoginStackNavigator></LoginStackNavigator>
  );
};
