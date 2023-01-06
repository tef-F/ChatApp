import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  TextInput,
  Text,
  Appbar,
  IconButton,
  List,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AvatarItem from "../AvatarItem";
import { theme } from "../../theme";

const ChatMessage = ({ route, navigation: { goBack } }) => {
  const { itemId, userInfo } = route.params;
  // const navigation = useNavigation();
  const _handleMore = () => console.log("Shown more");
  return (
    <View style={styles.container}>
      <Appbar.Header elevated={true} >
        <Appbar.BackAction onPress={() => goBack()} />
        <AvatarItem
          style={styles.avatar}
          size={40}
          name={userInfo.name}
          src={userInfo.url}
          isShowName={false}
        ></AvatarItem>
        <View style={styles.headerText}>
          <Text style={styles.title}>{userInfo.name}</Text>
          <Text style={styles.statusText}>Đang hoạt động</Text>
        </View>
        <View style={styles.btnControl}>
          
          <IconButton
            style={styles.btnIcon}
            icon="phone"
            iconColor={theme.colors.primary}
            size={20}
            onPress={() => console.log("Pressed Call")}
          />
          <IconButton
            icon="information"
            iconColor={theme.colors.primary}
            size={20}
            onPress={() => console.log("Pressed Info Message")}
          />
        </View>

      </Appbar.Header>

      <View style={{ justifyContent: "center", alignItems: "center", height: 600,}}>
        <Text>Chat Message! - {itemId}</Text>
      </View>
      <View style={styles.chatInputBox}>

      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#0068FF",
    flex: 1,
  },
  avatar: {
    marginRight: 10,
  },
  headerText: {
    alignContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  statusText: {
    fontSize: 10,
  },
  btnControl: {
    flexDirection: "row",
    marginLeft: 25,

  },
  chatInputBox: {
    justifyContent: "flex-end",
    height: 60,
    backgroundColor: "red",
    marginBottom:260,
  }
});
