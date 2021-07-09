import React from "react";
import { View, Text } from "react-native";
import EmojiSvg from "../../assets/emoji_triste.svg";
import { styles } from "./style";

export function NotFound() {
  return (
    <View style={styles.container}>
      <EmojiSvg style={styles.emoji} />
      <Text style={styles.text}>
        Oops! Não encontramos organizações com este nome.
      </Text>
    </View>
  );
}
