import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../ShoppingListItem";
import { useState } from "react";

export default function App() {
  type ShoppingListItemType = {
    id: string;
    name: string;
  };
  const initialList: ShoppingListItemType[] = [
    { id: "1", name: "Coffee" },
    { id: "2", name: "Tea" },
    { id: "3", name: "Milk" },
  ];

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue(undefined);
    }
  };

  const [value, setValue] = useState<string>();
  const [shoppingList, setShoppingList] = useState(initialList);
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={setValue}
        placeholder="E.g Coffee"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      {shoppingList.map((item) => (
        <ShoppingListItem name={item.name} key={item.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  textInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 12,
  },
});
