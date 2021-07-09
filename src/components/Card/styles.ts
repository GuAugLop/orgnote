import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 111,
    backgroundColor: "#fff",
    borderRadius: 14,

    elevation: 3,

    flexDirection: "row",
    padding: 14,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "center",
    borderRadius: 14,
  },

  title: {
    marginLeft: 12,

    fontFamily: theme.fonts.title,
    color: theme.colors.primary,
    lineHeight: 19.2,
  },
  subTitle: {
    marginLeft: 12,
    marginTop: 2,

    fontFamily: theme.fonts.text,
    color: theme.colors.reading,
    lineHeight: 19.2,
  },
  buttonText: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    marginLeft: 5,
  },
});
