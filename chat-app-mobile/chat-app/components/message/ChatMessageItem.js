import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Avatar from "../AvatarItem";

const ChatMessageItem = (props) => {
  const isMe = props.data.senderId == 1 ? true : false;
  const isImage = props.data.typeContent == "image" ? true : false;

  const BodyMessage = () => {
    if (isImage) {
      return (
        <Image style={styles.image} source={props.data.image} />
        // <View>
        //   {/* <Text style={styles.content}>{props.data.body}</Text> */}
         
        // </View>
      );
    } else {
      return <Text style={styles.content}>{props.data.body}</Text>;
    }
  };
  return (
    <View
      key={props.data.id}
      style={{ flexDirection: isMe ? "row-reverse" : "row", ...styles.item }}
    >
      {isMe ? null : (
        <Avatar
          id={props.data.id}
          size={40}
          name={props.data.name}
          src={props.data.url}
          isShowName={false}
          style={styles.avatar}
        />
      )}

      <View style={styles.conversation}>
        {isMe ? null : <Text style={styles.title}>{props.data.name}</Text>}
        <View style={styles.body}>
          <BodyMessage />
        </View>
        <Text style={styles.date}>{props.data.date}</Text>
      </View>
    </View>
  );
};

export default ChatMessageItem;

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
  },
  conversation: {
    justifyContent: "center",
    marginRight: 15,
  },
  body: {
    borderRadius: 10,
    maxWidth: 280,
    padding: 10,
    backgroundColor: "#F0F0F0",
  },
  content: {
    fontSize: 14,
  },
  title: {
    fontSize: 13,
  },
  date: {
    fontSize: 10,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    resizeMode: "contain",
    height: 200,
    width: 200,
  },
  avatar: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
  },
});
