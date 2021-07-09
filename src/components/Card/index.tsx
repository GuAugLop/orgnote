import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Button } from "../Button";
import { theme } from "../../global/styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SaveBlueSvg from "../../assets/salvo_azul.svg";
import SaveWhiteSvg from "../../assets/salvo_branco.svg";

export type Org = {
  name: string;
  description: string;
  avatar_url: string;
  id: string;
  html_url: string;
  message: string;
};

type Props = {
  data: Org;
  saved?: boolean;
  storage: Org[];
  setStorage: (storage: any) => void;
};

export const Card = ({ data, storage, setStorage }: Props) => {
  const [saved, setSaved] = React.useState(false);

  function checkSave(id: string) {
    let result = storage.find((item) => item.id == id);
    if (result) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }

  async function handleSave(id: string) {
    let find = storage.find((item) => item.id == id);
    if (find) {
      let newStorage = storage.filter((item) => item.id !== id);
      AsyncStorage.setItem("orgs", JSON.stringify(newStorage));
      setStorage(newStorage);
      setSaved(false);
    } else {
      storage.push(data);
      let newStorage = storage;
      AsyncStorage.setItem("orgs", JSON.stringify(newStorage));
      setStorage(storage);
      setSaved(true);
    }
  }

  React.useEffect(() => {
    checkSave(data.id);
  });

  return (
    <RectButton
      style={styles.container}
      onPress={() => {
        Linking.openURL(data.html_url);
      }}
    >
      <Image style={styles.image} source={{ uri: data.avatar_url }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subTitle}>{data.description}</Text>
        <View style={{ marginTop: 11 }}>
          <Button saved={saved} onPress={() => handleSave(data.id)}>
            {saved ? (
              <SaveWhiteSvg width={15} height={20} />
            ) : (
              <SaveBlueSvg width={15} height={20} />
            )}

            <Text
              style={[
                styles.buttonText,
                {
                  color: saved ? theme.colors.secondary : theme.colors.primary,
                },
              ]}
            >
              {saved ? "Salvo" : "Salvar"}
            </Text>
          </Button>
        </View>
      </View>
    </RectButton>
  );
};
