import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderRadius: 14,
    backgroundColor: "#fff",
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    alignItems: "center",
    flexDirection: "row",
    padding: 18,
  },

  backIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  input: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
