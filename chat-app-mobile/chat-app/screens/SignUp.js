import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import { Formik } from "formik";
import React, { createRef, useRef, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
} from "react-native";

import { Button, TextInput, HelperText, IconButton } from "react-native-paper";
import { registerValid } from "../utils/validator";
import Logo from "../components/Logo";
import Header from "../components/Header";
import { theme } from "../theme";
import useIsMountedRef from "../hooks/useIsMountedRef";
import useAuth from "../hooks/useAuth";

const SignUp = ({ navigation: { goBack } }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const isMountedRef = useIsMountedRef();
  const { register, isAuthenticated, user } = useAuth();

  const handleShowPasswork = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPasswork2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleRegister = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      if (isMountedRef.current) {
        setSubmitting(false);
      }
      await register(
        values.email,
        values.password,
        values.firstName,
        values.lastName
      );
      ToastAndroid.show("Register success!", ToastAndroid.SHORT);
      console.log(values);
      console.log(isAuthenticated);
      console.log(user);
    } catch (error) {
      console.error(error);
      resetForm();
      if (isMountedRef.current) {
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonBack}>
        <Button icon="chevron-left" size={25} onPress={() => goBack()}>
          Back
        </Button>
      </View>
      <StatusBar
        translucent={true}
        backgroundColor={"white"}
        barStyle="dark-content"
      />

      <Formik
        initialValues={registerValid.initial}
        validationSchema={registerValid.validationSchema}
        onSubmit={async (values, { setErrors, setSubmitting, resetForm }) =>
          handleRegister(values, {
            setErrors,
            setSubmitting,
            resetForm,
          })
        }
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
            <KeyboardAvoidingView>
              <View>
                <View style={styles.titleLogo}>
                  <Logo style={{ width: 60, height: 60, marginBottom: 8 }} />
                  <Header>Sign up to Chat Messanger</Header>
                </View>

                <View style={styles.inputContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      mode="outlined"
                      style={styles.inputName}
                      label="First Name"
                      autoFocus
                      returnKeyType="next"
                      value={values.firstName}
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      errorText={touched.firstName && errors.firstName}
                      error={Boolean(touched.firstName && errors.firstName)}
                      autoCapitalize="none"
                      autoCompleteType="firstName"
                      textContentType="firstName"
                      keyboardType="default"
                    />
                    <TextInput
                      mode="outlined"
                      style={{ marginLeft: 10, ...styles.inputName }}
                      label="Last Name"
                      returnKeyType="next"
                      value={values.lastName}
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      errorText={touched.lastName && errors.lastName}
                      error={Boolean(touched.lastName && errors.lastName)}
                      autoCapitalize="none"
                      autoCompleteType="lastName"
                      textContentType="lastName"
                      keyboardType="default"
                    />
                  </View>
                  <HelperText
                    type="error"
                    visible={Boolean(touched.firstName && errors.firstName)}
                  >
                    {touched.firstName && errors.firstName}
                  </HelperText>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    mode="outlined"
                    style={styles.input}
                    label="Email"
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
                    secureTextEntry={!showPassword}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    returnKeyType="done"
                    right={
                      <TextInput.Icon
                        icon={showPassword ? "eye" : "eye-off"}
                        onPress={handleShowPasswork}
                      />
                    }
                    error={Boolean(touched.password && errors.password)}
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.password && errors.password)}
                  >
                    {touched.password && errors.password}
                  </HelperText>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    mode="outlined"
                    style={styles.input}
                    label="Confirm password"
                    secureTextEntry={!showPassword2}
                    value={values.re_password}
                    onChangeText={handleChange("re_password")}
                    onBlur={handleBlur("re_password")}
                    returnKeyType="done"
                    right={
                      <TextInput.Icon
                        icon={showPassword2 ? "eye" : "eye-off"}
                        onPress={handleShowPasswork2}
                      />
                    }
                    error={Boolean(touched.re_password && errors.re_password)}
                  />
                  <HelperText
                    type="error"
                    visible={Boolean(touched.re_password && errors.re_password)}
                  >
                    {touched.re_password && errors.re_password}
                  </HelperText>
                </View>
                <Button
                  style={styles.button}
                  icon="login-variant"
                  mode="contained"
                  loading={isSubmitting}
                  onPress={handleSubmit}
                >
                  Sign up
                </Button>
              </View>
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;

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
  titleLogo: {
    // flexDirection: "row",
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
  inputName: {
    width: 170,
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
  buttonBack: {
    // backgroundColor: "red",
    marginRight: 300,
    marginBottom: 20,
    width: 100,
  },

  Checkbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
