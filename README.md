# dovie2 React Native + Expo

# 1.0 Creating the Project (5:19)

```
npm i -g expo-cli
expo -V
expo init dovie
```

```
시뮬레이션 in, andriod, web, (IOS)
```

# 1.1 cacheImages (10:25)

## 프리로드 에셋

- AppLoading 컴포넌트를 통해 (splash스크린을 보여주면서)
- 에셋을 프리로드해둔다.
- 로컬 에셋(내부적으로 asset폴더안을 정수 key로 참조하는듯) + fetch 에셋

```js
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
```

# 1.2 cacheFonts (5:49)

# 1.3 Stack Navigation (9:04)

# 1.4 Tabs Navigation (10:28)

# 1.5 Updating Header part One (8:44)

# 1.6 Updating Header part Two (8:27)

# 1.7 Styling Nav (10:56)

# 1.8 Adding the Icons (11:28)
