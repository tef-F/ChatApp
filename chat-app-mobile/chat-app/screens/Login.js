import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Logo from "../components/Logo";
import Header from "../components/Header";
import { theme } from "../theme";

import {
  Button,
  TextInput,
  Checkbox,
  IconButton,
  HelperText,
} from "react-native-paper";
import useIsMountedRef from "../hooks/useIsMountedRef";

import HttpService from "../utils/HttpService";
const httpservice = new HttpService();
import { loginValid } from "../utils/validator";

// Import the app styles
// import { styles } from "../utils/styles";

const Login = ({ navigation }) => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isMountedRef = useIsMountedRef();

  // checks if the input field is empty
  const handleSignIn = async (email, password) => {
    // Logs the email to the console
    try {
      const response = await httpservice.post("/auth/login", {
        email,
        password,
      });
      const { accessToken, user } = response.data;
      console.log({ accessToken, user });
      Alert.alert(
        "Response Info",
        `Access Token:${accessToken} \nUser: ${user}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPasswork = () => {
    setShowPassword((show) => !show);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          barStyle="dark-content"
        />
        <Logo />
        <Header>Sign in to Chat Messanger</Header>
        <Formik
          initialValues={loginValid.initial}
          validationSchema={loginValid.validationSchema}
          onSubmit={(values) => handleSignIn(values.email, values.password)}
        >
          {(formikProps) => {
            const {
              errors,
              touched,
              values,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = formikProps;
            return (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    mode="outlined"
                    style={styles.input}
                    label="Email"
                    autoFocus
                    returnKeyType="next"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    errorText={touched.email && errors.email}
                    error={Boolean(touched.email && errors.email)}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.email && errors.email)}
                  >
                    {touched.email && errors.email}
                  </HelperText>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    mode="outlined"
                    style={styles.input}
                    label="Password"
                    keyboardType={showPassword ? "visible-password" : "default"}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    returnKeyType="done"
                    // value={password}
                    // onChangeText={(text) => setPassword(text)}
                    right={
                      <TextInput.Icon
                        icon={showPassword ? "eye" : "eye-off"}
                        onPress={handleShowPasswork}
                      />
                    }
                    error={Boolean(touched.password && errors.password)}
                    secureTextEntry
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.password && errors.password)}
                  >
                    {touched.password && errors.password}
                  </HelperText>
                </View>

                <Button
                  style={styles.button}
                  icon="login"
                  mode="contained"
                  loading={isSubmitting}
                  onPress={handleSubmit}
                >
                  Login
                </Button>
              </>
            );
          }}
        </Formik>
        <View style={styles.forgotPassword}>
          {/* <View style={styles.Checkbox}>
                    <Checkbox
                      
                      checked={values.remember}
                    />
                    <Text style={styles.remeber}>Remember me</Text>
                  </View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

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

  inputContainer: {
    height: 80,
  },

  input: {
    width: 350,
    // backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    paddingHorizontal: 0,
  },

  button: {
    marginTop: 15,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },

  Checkbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
  },
  forgotPasswordText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  forgotPassword: {
    flexDirection: "row",
    marginTop: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
