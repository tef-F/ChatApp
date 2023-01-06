import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ChatConversationItem from "./ChatConversationItem";
import AvatarList from "../AvatarList";
import SearchItem from "../SearchItem";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: 1,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
  },
  {
    id: 2,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
  },
  {
    id: 3,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Mỹ Duyên",
  },
  {
    id: 4,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 5,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 6,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 7,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 8,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 9,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
  {
    id: 10,
    url: require("../../assets/avatar2.jpg"),
    name: "Nguyễn Thị Phương Linh",
  },
];

const ChatConversationList = (props) => {
  const navigation = useNavigation();

  //   const { size, url, name } = props;

  const handlePressConversation = (id, item) => {
    console.log(`Clicked - ${id}`);
    navigation.navigate("ChatMessage", {
      itemId: id,
      userInfo: item,
    });
    // navigation.navigation
  };
  const renderItemChat = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePressConversation(index, item)}>
      <ChatConversationItem
        id={index}
        size={60}
        name={item.name}
        url={item.url}
      />
    </TouchableOpacity>
  );

  const ListHeader = () => {
    return (
      <View>
        <SearchItem />
        <AvatarList />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 25 }}
      ListHeaderComponent={ListHeader}
      key={1}
      style={styles.List}
      data={DATA}
      renderItem={renderItemChat}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
  );
};

export default ChatConversationList;

const styles = StyleSheet.create({
  List: {},
});
