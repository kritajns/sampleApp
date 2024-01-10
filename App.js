import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/NavigationServices";
import MainStackScreen from "./app/navigation/MainStack";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import store from "./app/redux/store";

export default function App() {
  return (
    // <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainStackScreen />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
    // </SafeAreaProvider>
  );
}
