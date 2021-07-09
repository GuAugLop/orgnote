import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Card } from "../../components/Card";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "../../components/Header";
import { NoStorage } from "../../components/NoStorage";

export const Saves = () => {
  const [storage, setStorage] = React.useState([]);

  React.useEffect(() => {
    async function getStorage() {
      let result = await AsyncStorage.getItem("orgs");
      if (result) {
        setStorage(JSON.parse(result));
      }
    }
    getStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Header text="Suas organizações salvas" />
      {storage.length === 0 ? (
        <NoStorage />
      ) : (
        <FlatList
          style={styles.list}
          keyExtractor={(item) => String(item.id)}
          data={storage}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card storage={storage} setStorage={setStorage} data={item} />
          )}
          contentContainerStyle={{
            paddingBottom: 30,
            paddingHorizontal: 3,
          }}
        />
      )}
    </View>
  );
};
