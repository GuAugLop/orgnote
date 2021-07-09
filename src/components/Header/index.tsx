import React from "react";
import { View, Text } from "react-native";

import ArrowSvg from "../../assets/seta_esquerda.svg";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  text: string;
};

export const Header = ({ text }: Props) => {
  const navigation = useNavigation();

  function goBack() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <ArrowSvg width={25} height={25} onPress={goBack} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
