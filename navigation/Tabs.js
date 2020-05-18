import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Detail, Favs, Movies, Search, Tv } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
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
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Favourite") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={25}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
          shadowColor: "black",
        },
      }}
    >
      <Tabs.Screen name={"Movies"} component={Movies} />
      <Tabs.Screen name={"TV"} component={Tv} />
      <Tabs.Screen name={"Search"} component={Search} />
      <Tabs.Screen name={"Favourite"} component={Favs} />
    </Tabs.Navigator>
  );
};
