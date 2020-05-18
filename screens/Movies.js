import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>Movies</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};
