import * as React from "react";
import { View, StyleSheet, SafeAreaView, } from "react-native";
import { Appbar,  } from "react-native-paper";
import { theme } from "../theme";
import ChatConversationList from "../components/conversation/ChatConversationList";

const Home = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);

  const _handleSearch = () => console.log("Searching");

  const _handleTune = () => console.log("Tune");

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Appbar.Header>
          <Appbar.Action
            icon="tune"
            onPress={_handleTune}
            style={styles.icon}
          />
          <Appbar.Content title="Chat" titleStyle={styles.title} />
          <Appbar.Action
            icon="camera"
            onPress={_handleSearch}
            style={styles.icon}
          />
          <Appbar.Action icon="pen" onPress={_handleMore} style={styles.icon} />
        </Appbar.Header>
      </View>
        <View style={styles.content}>
          <ChatConversationList />
        </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: "100%",
    // backgroundColor: "red",
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    ...theme.borderBottom,
  },
  icon: {
    backgroundColor: "#F2F2F2",
  },
  title: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    // backgroundColor: "red",
    paddingRight: 5,
    paddingLeft: 5,
  },
});
