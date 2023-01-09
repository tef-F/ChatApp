import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ChatMessageItem from "./ChatMessageItem";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: 1,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
    senderId: 2,
    image: null,
    typeContent: "text",
    body: "Xin chao`",
    date: "1 min ago",
  },
  {
    id: 2,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
    senderId: 1,
    image: null,
    typeContent: "text",
    body: "Gì",
    date: "2 min ago",
  },
  {
    id: 3,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
    senderId: 2,
    image: null,
    typeContent: "text",
    body: "người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè",
    date: "3 min ago",
  },
  {
    id: 4,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
    senderId: 1,
    image: null,
    typeContent: "text",
    body: "?",
    date: "4 min ago",
  },
  {
    id: 5,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
    senderId: 2,
    image: null,
    typeContent: "text",
    body: "người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè",
    date: "3 min ago",
  },
  {
    id: 6,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
    senderId: 1,
    image: null,
    typeContent: "text",
    body: "?",
    date: "4 min ago",
  },
  {
    id: 7,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
    senderId: 2,
    image: null,
    typeContent: "text",
    body: "người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè",
    date: "3 min ago",
  },
  {
    id: 8,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
    senderId: 1,
    image: null,
    typeContent: "text",
    body: "?",
    date: "4 min ago",
  },
  {
    id: 9,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
    senderId: 2,
    image: null,
    typeContent: "text",
    body: "người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè",
    date: "3 min ago",
  },
  {
    id: 10,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
    senderId: 1,
    image: null,
    typeContent: "text",
    body: "?",
    date: "4 min ago",
  },
  {
    id: 11,
    url: require("../../assets/avatar_ex.jpg"),
    name: "Đỗ Nguyễn Minh Nguyên",
    senderId: 2,
    image: require("../../assets/avatar2.jpg"),
    typeContent: "image",
    body: "Cái ảnh này nè!",
    date: "1 min ago",
  },
  {
    id: 12,
    url: require("../../assets/avatar2.jpg"),
    name: "Hà Vi",
    senderId: 1,
    image: null,
    typeContent: "text",
    body: "người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè người quen của bạn nè",
    date: "4 min ago",
  },
];

const ChatMessageList = () => {
  const flatListRef = React.useRef();
  const ITEM_HEIGHT = 100;

//   React.useLayoutEffect(() => {
//     const timeout = setTimeout(() => {
//       if (flatListRef.current && DATA && DATA.length > 0) {
//         flatListRef.current.scrollToEnd({ animated: false });
//       }
//     }, 1000);

//     return () => {
//       clearTimeout(timeout);
//     };

//    }, [DATA]);

  const handlePressMessage = (id, item) => {
    console.log(`Clicked - ${id}`);
  };

  const renderItemMessage = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePressMessage(index, item)}>
      <ChatMessageItem id={index} data={item} />
    </TouchableOpacity>
  );
  

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 25 }}
      //   ListHeaderComponent={ListHeader}
      getItemLayout={(DATA, index) => {
        return { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }; 
      }}
      ref={flatListRef}
      key={2}
      style={styles.List}
      data={DATA}
      initialScrollIndex={DATA.length-1}
      renderItem={renderItemMessage}
      keyExtractor={(item) => item.id}
      horizontal={false}
    />
  );
};

export default ChatMessageList;

const styles = StyleSheet.create({
  List: {
    backgroundColor: "white",
  },
});
