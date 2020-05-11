import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
