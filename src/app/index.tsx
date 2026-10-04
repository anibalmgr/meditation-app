import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const [message, setMessage] = useState("Hello, world!");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Text>{message}</Text>
      <Button
        title="Update Message"
        onPress={() =>
          setMessage(
            message.includes("world") ? "Hello React Native!" : "Hello, world!",
          )
        }
      />
    </View>
  );
}
