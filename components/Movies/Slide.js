import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${(HEIGHT / 4).toFixed(0)}px;
  background-color: black;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 3px;
`;

const OverView = styled.Text`
  color: white;
  font-size: 15px;
  opacity: 0.8;
  margin-bottom: 5px;
`;

const Votes = styled.Text`
  color: white;
  opacity: 0.8;
  margin-bottom: 3px;
`;

const Button = styled.View`
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({
  id,
  title,
  overview,
  backdrop_path,
  vote_average,
  poster_path,
}) => {
  return (
    <Container>
      <BG resizeMode="cover" source={{ uri: apiImage(backdrop_path) }} />
      <Content>
        <Poster url={apiImage(poster_path)} />
        <Data>
          <Title>{title}</Title>
          <Votes>💖 {vote_average} / 10</Votes>
          <OverView>{overview.slice(0, 120)}</OverView>
          <TouchableOpacity>
            <Button>
              <ButtonText>View Details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default Slide;
