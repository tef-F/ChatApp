import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import {
  Button,
  TextInput,
  Text,
  Appbar,
  IconButton,
  List,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AvatarItem from "../components/AvatarItem";
import { theme } from "../theme";
import MessageBottomBar from "../components/message/MessageBottomBar";
import ChatMessageList from "../components/message/ChatMessageList";
import ChatConversationList from "../components/conversation/ChatConversationList";

const ChatMessage = ({ route, navigation: { goBack } }) => {
  const { itemId, userInfo } = route.params;
  // const navigation = useNavigation();
  const _handleMore = () => console.log("Shown more");
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header elevated={true}>
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
            size={22}
            onPress={() => console.log("Pressed Call")}
          />
          <IconButton
            icon="information"
            iconColor={theme.colors.primary}
            size={22}
            onPress={() => console.log("Pressed Info Message")}
          />
        </View>
      </Appbar.Header>

      {/* */}

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* Content message */}
          <View style={styles.screen}>
            <ChatMessageList />
            <MessageBottomBar />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    marginRight: 10,
  },
  headerText: {
    width: 200,
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
  },

  wrapper: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#4066a3",
  },
});
