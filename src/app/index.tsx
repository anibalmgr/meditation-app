import "@/global.css";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const [counter, setCounter] = useState(16);
  const [timer, setTimer] = useState(false);

  useEffect(() => (timer ? setCounter(15) : setCounter(16)));

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Pressable className="m-2" onPress={() => setTimer(true)}>
        <Text>{counter}</Text>
      </Pressable>
    </View>
  );
}
