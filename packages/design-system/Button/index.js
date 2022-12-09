import { View, Text, Button } from "react-native";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title={"Counter ++ "}
      ></Button>
    </View>
  );
}
