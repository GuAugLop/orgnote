import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  icon: {
    marginTop: 32,
    marginBottom: 11,
  },
  title: {
    fontFamily: theme.fonts.title,
    color: "#000",
    fontSize: 22,
  },
  subTitle: {
    fontFamily: theme.fonts.text,
    color: theme.colors.reading,
    fontSize: 16,
  },
  list: {
    width: "100%",
    marginTop: 32,
  },
  savesButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
