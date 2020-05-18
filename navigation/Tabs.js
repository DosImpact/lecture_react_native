import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Detail, Favs, Movies, Search, Tv } from "../screens";

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name={"Movies"} component={Movies} />
    <Tabs.Screen name={"Tv"} component={Tv} />
    <Tabs.Screen name={"Search"} component={Search} />
    <Tabs.Screen name={"Favs"} component={Favs} />
  </Tabs.Navigator>
);
