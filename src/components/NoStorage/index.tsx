import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import SaveGraySvg from "../../assets/salvo_cinza.svg";

export function NoStorage() {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>
        Sua lista de organizações está vazia. Clique no ícone{" "}
        <SaveGraySvg width={20} height={20} /> Para salvar uma organização
      </Text>
    </View>
  );
}
