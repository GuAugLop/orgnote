import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { InputSearch } from "../../components/InputSearch";
import { styles } from "./styles";
import Destaque from "../../assets/destaque.svg";
import { Card, Org } from "../../components/Card";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import ArrowRight from "../../assets/seta_direita_branco.svg";
import { useNavigation } from "@react-navigation/core";
import { API } from "../../api/github";
import { NotFound } from "../../components/NotFound";

const trends = [
  {
    id: "6412038",
    name: "React Community",
    description: "React website and its localization",
    avatar_url:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    html_url: "https://github.com/reactjs",
  },
  {
    id: "139426",
    name: "Angular",
    avatar_url:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png",
    html_url: "https://github.com/angular",
  },
  {
    id: "6128107",
    name: "vuejs",
    avatar_url:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
    html_url: "https://github.com/vuejs",
  },
];

export const Home = () => {
  const [value, setValue] = React.useState("");
  const [storage, setStorage] = React.useState([]);
  const [searching, setSearching] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState({} as Org);
  const [loading, setLoading] = React.useState(false);

  const navigation = useNavigation();

  React.useEffect(() => {
    value.trim() ? setSearching(true) : setSearching(false);
  }, [value]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      async function getStorage() {
        let result = await AsyncStorage.getItem("orgs");
        if (result) {
          setStorage(JSON.parse(result));
        }
      }
      getStorage();
    });

    return unsubscribe;
  }, [navigation]);

  function handleNavigate() {
    navigation.navigate("Saves");
  }

  async function handleSearch() {
    try {
      setLoading(true);
      let result: Org = await API.getOrg(value);
      setSearchResult(result);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  function changeText(value: string) {
    setSearchResult({} as Org);
    setValue(value);
  }

  return (
    <View style={styles.container}>
      <InputSearch
        placeholder="Procurar organizações..."
        changeText={changeText}
        value={value}
        setValue={setValue}
        searching={searching}
        onSubmitEditing={handleSearch}
      />
      {!searching ? (
        <>
          <Destaque width={24} height={24} style={styles.icon} />
          <Text style={styles.title}>Organizações em destaque</Text>
          <Text style={styles.subTitle}>
            Veja as organizações em tendência no GitHub
          </Text>
          <FlatList
            style={styles.list}
            keyExtractor={(item) => item.id}
            data={trends}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card storage={storage} setStorage={setStorage} data={item} />
            )}
            contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 3 }}
          />
          <View style={styles.savesButton}>
            <Button saved onPress={() => handleNavigate()}>
              <Text
                style={[
                  styles.title,
                  {
                    color: theme.colors.background,
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 18,
                  },
                ]}
              >
                Ver salvos
              </Text>
              <ArrowRight width={20} height={20} />
            </Button>
          </View>
        </>
      ) : (
        searchResult.id && (
          <View style={{ marginTop: 8 }}>
            <Card
              data={searchResult}
              setStorage={setStorage}
              storage={storage}
            />
          </View>
        )
      )}
      {loading && (
        <ActivityIndicator
          color={theme.colors.primary}
          size="large"
          style={{ marginTop: 30 }}
        />
      )}
      {searchResult.message && value.length > 0 && <NotFound />}
    </View>
  );
};
