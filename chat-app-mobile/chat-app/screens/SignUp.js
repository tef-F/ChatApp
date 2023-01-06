import {
  Text, View,
  // SafeAreaView,
  // View,
  // Pressable,
  // Alert,
  // StyleSheet,
  // KeyboardAvoidingView,
  // StatusBar,
  // TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignUp = ({ navigation: { goBack }}) => {
  return (
    <View> 
        <Text>SignUp Screen</Text>
        <Button onPress={() => goBack()}> Back </Button>
    </View>
  );
};

export default SignUp;
