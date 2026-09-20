import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const [message, setMessage] = useState("Hello, world!");

  // read changes to the message variable and update the UI accordingly

  return (
    <View
      style={{
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Text>{message}</Text>
      <Button
        title="Update Message"
        onPress={() => {
          message === "Hello, world!"
            ? setMessage("Hello, React Native!")
            : setMessage("Hello, world!");
        }}
      />
    </View>
  );
}
