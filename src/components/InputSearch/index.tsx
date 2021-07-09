import React from "react";
import { View, TextInputProps, Animated } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

import ArrowSvg from "../../assets/seta_esquerda.svg";
import Cancelar from "../../assets/cancelar.svg";
import PesquisaSvg from "../../assets/pesquisa.svg";

type Props = TextInputProps & {
  searching: boolean;
  setValue: (value: string) => void;
  changeText: (value: string) => void;
};

export const InputSearch = ({
  searching,
  setValue,
  changeText,
  ...rest
}: Props) => {
  const posAnim = React.useRef(new Animated.Value(1)).current;

  const posIn = () => {
    Animated.timing(posAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const posOut = () => {
    Animated.timing(posAnim, {
      toValue: -39,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    searching ? posIn() : posOut();
  }, [searching]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [{ translateX: posAnim }],
          },
        ]}
      >
        <Cancelar
          onPress={() => setValue("")}
          width={0}
          height={0}
          style={styles.backIcon}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            flex: 1,
            transform: [{ translateX: posAnim }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => changeText(text)}
          {...rest}
        />
      </Animated.View>

      <PesquisaSvg style={styles.searchIcon} />
    </View>
  );
};
