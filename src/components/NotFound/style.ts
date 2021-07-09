import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  emoji: {
    width: 25,
    height: 25,
  },
  text: {
    color: theme.colors.reading,
    fontFamily: theme.fonts.text,
    textAlign: "center",
    fontSize: 16,
  },
});
