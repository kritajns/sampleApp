import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../../screens/ProductScreen";
import CartScreen from "../../screens/CartScreen";
import MyProduct from "../../screens/MyProduct";

const Stack = createStackNavigator();

const MainStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Products" component={ProductScreen} />
    <Stack.Screen name="MyProduct" component={MyProduct} />
    <Stack.Screen name="MyCart" component={CartScreen} />
  </Stack.Navigator>
);

export default MainStackScreen;
