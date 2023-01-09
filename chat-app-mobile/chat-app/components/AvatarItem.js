import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Badge } from "react-native-paper";

const AvatarItem = (props) => (
  <View key={props.key} style={props.style ? props.style : styles.item}>
    <View>
      <Avatar.Image size={props.size} source={props.src} />
      <Badge
        size={props.size/3.75}
        style={{ backgroundColor: "#2AD03E", ...styles.dot }}
      ></Badge>
    </View>
    {props.isShowName ? (
      <Text numberOfLines={2} style={styles.name}>
        {props.name}
      </Text>
    ) : null}
  </View>
);
export default AvatarItem;

const styles = StyleSheet.create({
  item: {
    marginLeft: 2,
    width: 80,
    paddingTop: 10,
    alignItems: "center",
    // backgroundColor: "red",
  },
  name: {
    marginTop: 5,
    fontStyle: "normal",
  },
  dot: {
    borderStyle: "solid",
    borderWidth: 2.5,
    borderColor: "white",
    position: "absolute",
    bottom: 2,
    right: 2,
  },
});
