import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";

export default ({ navigation }) => {
  const [movies, setMovies] = useState({
    nowPlayingData: [],
    popularData: [],
    upcomingData: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  useEffect(() => {
    const getData = async () => {
      const [nowPlayingData, nowPlayingError] = await movieApi.nowPlaying();
      const [popularData, popularError] = await movieApi.popular();
      const [upcomingData, upcomingError] = await movieApi.upcoming();
      setMovies({
        nowPlayingData,
        nowPlayingError,
        popularData,
        popularError,
        upcomingData,
        upcomingError,
      });
    };
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>
        Movies : {movies?.nowPlayingData?.length || "no movie:("}
      </Text>
      <Button onPress={() => navigation.navigate("Detail")} title="Detail" />
    </View>
  );
};
