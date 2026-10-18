import { getCountdown, startCountdown } from "@/helpers/countdown";
import { Pressable, Text, View } from "react-native";

export default function Dahsboard() {
  const countdown = getCountdown();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Pressable className="m-2 p-8" onPress={() => startCountdown}>
        <Text>{countdown.duration}</Text>
      </Pressable>
    </View>
  );
}
