import { View, Text } from "react-native";

export default function HeaderBar({ label }: { label: string }) {
  return (
    <View className="mb-5 flex items-center justify-center">
      <Text className="font-quicksand-bold text-lg text-gray-800">{label}</Text>
    </View>
  );
}
