import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: 10px;
`;

const Title = ({ title }) => <Text>{title}</Text>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
