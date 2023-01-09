import * as React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo(props) {
  return (
    <Image
      source={require("../assets/android-chrome-192x192.png")}
      style={props.style ? props.style : styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
