import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard,
} from "react-native";
import { IconButton } from "react-native-paper";

const MessageBottomBar = () => {
  const inputRef = React.useRef(null);
  const [isShowing, setIsShowing] = React.useState(true);

  const handleFocus = () => {
    setIsShowing(!isShowing);
  };


  return (
    <View style={styles.chatInputBar}>
      {isShowing ? (
        <View
          // ref={iconToolView}
          style={{ flexDirection: "row", marginLeft: 10 }}
        >
          <IconButton
            style={styles.icon}
            icon="camera"
            size={22}
            onPress={() => console.log("Camera Open")}
          />
          <IconButton
            style={styles.icon}
            icon="image"
            size={22}
            onPress={() => console.log("Imgage Open")}
          />
          <IconButton
            style={styles.icon}
            icon="microphone"
            size={22}
            onPress={() => console.log("Mic Check")}
          />
        </View>
      ) : null}
      <View style={styles.InputView}>
        <TextInput
          style={styles.textInputCustom}
          ref={inputRef}
          multiline={true}
          onFocus={handleFocus}
          onBlur={handleFocus}
          placeholder="Text Input"
        />

        <IconButton
          icon="emoticon-happy-outline"
          size={22}
          onPress={() => console.log("Sticker")}
        />
      </View>
      <IconButton
        icon="send"
        size={25}
        onPress={() => console.log("Send Mess")}
      />
    </View>
  );
};

export default MessageBottomBar;

const styles = StyleSheet.create({
  textInputCustom: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  InputView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    // width: 220,
    backgroundColor: "#EEEEEE",
    fontSize: 20,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    width: 25,
  },
  chatInputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    height: 60,
  },
});
