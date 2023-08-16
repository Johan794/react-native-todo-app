import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

type TodoItemProps = {
  item: {
    completed: boolean;
    id: Number;
    text: string;
  };
  handleChange: (id: Number) => void;
};

export default function TodoItem(props: TodoItemProps) {
  const [checked, setChecked] = useState(props.item.completed);

  return (
    <View>
      <Text>{props.item.text}</Text>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
          props.handleChange(props.item.id);
        }}
      />
    </View>
  );
}
