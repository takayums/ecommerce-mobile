import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView className="relative w-full flex-1 bg-white">
      <Slot />
    </SafeAreaView>
  );
}
