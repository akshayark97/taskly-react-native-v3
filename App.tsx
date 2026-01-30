import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "pink" }]} />
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Milk" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
