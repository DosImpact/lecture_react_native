# dovie2 React Native + Expo

# 3.7 continue...

# dependencies

```
expo install expo-font
expo install expo-asset

npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs

yarn add react-native-web-swiper
yarn add styled-components
```

# 빅피쳐

1. 프리로드 에셋
2. 네이게이터
   2.1 네이게이터 스타일링

3. API Layer
   3.1 sexy 한 함수 디자인
4. Screens

# Tips

1. components 폴더구조.

- 공통적으로 이곳저곳에서 사용하는 컴포넌트는 components 폴더의 root에 위치.
- screens/Moives 에서만 사용하는 컴포넌트는 components/Moives 폴더에 위치.

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

# 1.2 cacheFonts (5:49)

## 프리로드 에셋

- AppLoading 컴포넌트를 통해 (splash스크린을 보여주면서)
- 에셋을 프리로드해둔다.
- cacheImages : 이미지 프리로드 (Promise 리턴)
- 로컬 이미지> 에셋(내부적으로 asset폴더안을 정수 key로 참조하는듯) + 이미지url> fetch 에셋
- cacheFonts : 폰트 프리로드 ( Promise 리턴)
- cahce => Promise all

```js
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

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
    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
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

# 1.3 Stack Navigation (9:04)

## install React navigation 5.x

- make dir structure > navigtion/screens folder
- create stack navigation

```js
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

return isReady ? (
  <NavigationContainer>
    <Stack />
  </NavigationContainer>
) : (
  <AppLoading
    startAsync={loadAssets}
    onFinish={onFinish}
    onError={console.error}
  />
);
```

```js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
```

```js
import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};
```

# 1.4 Tabs Navigation (10:28)

# 1.5 Updating Header part One (8:44)

# 1.6 Updating Header part Two (8:27)

# 1.7 Styling Nav (10:56)

# 1.8 Adding the Icons (11:28)

# 3 Movie Screen

# 3.0 Home Slider (9:45)

# 3.1 Home Slider part Two (7:04)

# 3.2 Slider Background (11:10)

# 3.3 Slider Content (6:52)

# 3.4 Finishing the Slider (13:43)

# 3.5 Popular Movies part One (10:40)

# 3.6 Vertical Movie Component (9:53)

# 3.7 Vertical Movie Component part Two (7:05)

# 3.8 Horizontal part One (13:15)

# 3.9 Horizontal part Two (14:24)

# 3.10 Finishing the Movies (4:25)
