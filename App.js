import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/NavigationServices";
import MainStackScreen from "./app/navigation/MainStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
