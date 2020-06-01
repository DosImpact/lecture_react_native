import React from "react";
import {
  Button,
  Dimensions,
  ActivityIndicator,
  View,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled(ScrollView)`
  background-color: black;
`;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${(HEIGHT / 4).toFixed(0)}px;
  background-color: black;
  margin-bottom: 20px;
`;

export default ({ ...movies }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: movies.loading ? "center" : "flex-start",
      }}
    >
      {movies.loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
          }}
        >
          <Title title="Now Playing" />
          <SliderContainer>
            <Swiper controlsEnabled={false} loop={true} timeout={5}>
              {movies.nowPlayingData.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  backdrop_path={movie.backdrop_path}
                  vote_average={movie.vote_average}
                  poster_path={movie.poster_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
        </View>
      )}
    </ScrollView>
  );
};
