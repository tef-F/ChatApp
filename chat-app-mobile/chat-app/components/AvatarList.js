import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Avatar from "./AvatarItem";

const DATA = [
  {
    id: 1,
    url: require("../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
  },
  {
    id: 2,
    url: require("../assets/avatar2.jpg"),
    name: "Hà Vi",
  },
  {
    id: 3,
    url: require("../assets/avatar_ex.jpg"),
    name: "Mỹ Duyên",
  },
  {
    id: 4,
    url: require("../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 5,
    url: require("../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 6,
    url: require("../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 7,
    url: require("../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 8,
    url: require("../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
];

const AvatarList = (props) => {
  //   const { size, url, name } = props;

  const renderItem = ({ item }) => (
    <Avatar id={item.id} size={60} name={item.name} src={item.url} isShowName={true} />
  );

  return (
    <FlatList
      style={styles.List}
      horizontal={true}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}

    />
  );
};

export default AvatarList;

const styles = StyleSheet.create({
  List: {
    marginLeft: 5,
    paddingLeft: 5,
  },
});
