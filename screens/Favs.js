import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default ({ navigation }) => {
  const [favs, setFavs] = useState({
    discoverData: [],
    discoverError: null,
  });

  useEffect(() => {
    const getData = async () => {
      const [discoverData, discoverError] = await movieApi.discover();
      setFavs({ discoverData, discoverError });
    };
    getData();
  }, []);

  return (
    <View>
      <Text>Favs.js {favs?.discoverData?.length || "no data:("}</Text>
    </View>
  );
};
