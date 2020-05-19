import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api";

export default ({ navigation }) => {
  const [tvs, setTvs] = useState({
    todayData: [],
    thisWeekData: [],
    topRatedData: [],
    popularData: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  });

  useEffect(() => {
    const getData = async () => {
      const [todayData, todayError] = await tvApi.today();
      const [thisWeekData, thisWeekError] = await tvApi.thisWeek();
      const [topRatedData, topRatedError] = await tvApi.topRated();
      const [popularData, popularError] = await tvApi.popular();
      setTvs({
        todayData,
        thisWeekData,
        topRatedData,
        popularData,
        todayError,
        thisWeekError,
        topRatedError,
        popularError,
      });
    };

    getData();
  }, []);

  return (
    <View>
      <Text>TV : {tvs?.todayData?.length || "no tvs :("}</Text>
    </View>
  );
};
