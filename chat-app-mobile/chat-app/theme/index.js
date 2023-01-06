import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#000000",
    primary: "#007BFF",
    secondary: "#414757",
    error: "#f13a59",
  },
  borderTop: {
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#F6F6F6",
  },
  borderBottom: {
    borderStyle: "solid",
    borderBottomColor: "#F6F6F6",
    borderBottomWidth: 1,
  },
};
