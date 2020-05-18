import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import Tabs from "../navigation/Tabs";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      mode="card"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
          shadowColor: "black",
          borderBottomColor: "black",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
