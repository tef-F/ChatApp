import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "../AvatarItem";

const ChatConversationItem = (props) => {
  return (
    <View key={props.id} style={styles.item}>
      <Avatar
        id={props.id}
        size={60}
        name={props.name}
        src={props.url}
        isShowName={false}
      />
      <View style={styles.conversation}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.content}>{props.name} · 22:06</Text>
      </View>
    </View>
  );
};

export default ChatConversationItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
  },
  conversation: {
    justifyContent: "center",
    
  },
  content: {
    fontSize: 14,
  }, 
  title: {
    fontSize: 18,
  },
  
});
