import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

const cacheImages = (images) =>
  images.map((image) => {
    console.log(image);
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const onFinish = () => {
    setIsReady(true);
  };
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png"),
    ]);
  };

  return isReady ? (
    <View style={styles.container}>
      <Text>Ready!</Text>
    </View>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
