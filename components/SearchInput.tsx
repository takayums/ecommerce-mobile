import { View, TextInput } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchInput() {
  const [search, setSearch] = useState<string>("");
  return (
    <View className="flex w-full flex-row items-center justify-center gap-4">
      <View className="relative h-12 w-full flex-1 flex-row items-center gap-2 rounded-lg border border-gray-300 pl-4">
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search Product"
          className="w-full border-none text-base text-gray-500 outline-none placeholder:font-quicksand-medium"
          style={{ fontFamily: "Quicksand-Medium" }}
        />
      </View>
      <View className="size-12 items-center justify-center rounded-lg border border-gray-300 bg-white">
        <Ionicons name="filter-circle-outline" color="#6a7282" size={24} />
      </View>
    </View>
  );
}
