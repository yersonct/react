import { View, Text, Pressable, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigations/typs";
import { useNavigation } from "@react-navigation/native";

type HomeNavigationProps = NativeStackNavigationProp<
  HomeStackParamList,
  "Home"
>;
export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProps>();
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Details", { id: "1" })}
        style={styles.Pressable}
      >
        <Text>Navegacion</Text>
      </Pressable>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: "green",
    color: "white",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
  },
});
