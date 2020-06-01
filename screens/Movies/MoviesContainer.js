import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

export default ({ navigation }) => {
  const [movies, setMovies] = useState({
    loading: true,
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
        loading: false,
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

  return <MoviesPresenter {...movies} />;
};
