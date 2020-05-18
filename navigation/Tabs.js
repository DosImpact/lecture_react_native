import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Detail, Favs, Movies, Search, Tv } from "../screens";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.state?.routeNames[route.state.index] || "Movies",
    });
    return () => {};
  }, [route]);
  //navigation.setOptions({ title: "hello" });
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={"Movies"} component={Movies} />
      <Tabs.Screen name={"Tv"} component={Tv} />
      <Tabs.Screen name={"Search"} component={Search} />
      <Tabs.Screen name={"Favourite"} component={Favs} />
    </Tabs.Navigator>
  );
};
