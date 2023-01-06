import * as React from 'react';
import { View, StyleSheet, } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";


const Contacts = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
  
  
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contacts!</Text>
    </View>
    );
};

export default Contacts;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#0068FF",
        flex: 1,
        padding: 20,
        width: "100%",
        maxWidth: 350,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
      },
    
})
