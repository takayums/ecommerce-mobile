import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { FilterLabel, SearchInput } from "@/components";

import { images } from "@/constants";
import { IProducts } from "@/types/product";

export default function Home() {
  const [data, setData] = useState<IProducts[]>([]);

  const dataStoreFetch = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const dataStore = await res.json();
      setData(dataStore.products);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    dataStoreFetch();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Products List */}
      <FlatList
        data={data}
        contentContainerClassName="p-5 gap-5"
        columnWrapperClassName="gap-5"
        numColumns={2}
        renderItem={({ item }) => (
          <View className="elevation-md relative flex-1 rounded-2xl border border-gray-200 bg-white p-4 shadow-md shadow-black/50 hover:cursor-pointer">
            <View className="mb-3 flex h-28 items-center justify-center rounded-2xl">
              <Image
                source={{ uri: item.images[0] }}
                className="h-full w-full"
                resizeMode="contain"
              />
            </View>
            <View className="absolute right-4 top-4 size-6 items-center justify-center rounded-full"></View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="font-quicksand-semibold text-sm text-gray-600"
            >
              {item.title}
            </Text>
            <Text className="mb-3 font-quicksand text-xs text-gray-400">
              {item.category}
            </Text>
            <View className="flex-row items-center gap-6">
              <View className="gap-.5 flex flex-row items-center">
                <Ionicons name="logo-usd" size={14} color={"#05df22"} />
                <Text className="font-quicksand-medium text-sm text-gray-500">
                  {item.price}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="star" size={14} color={"#FFD33C"} />
                <Text className="font-quicksand text-sm text-gray-600">
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            <View className="mb-5 flex-row items-center justify-between">
              <View>
                <Text className="mb-1 font-quicksand text-sm leading-3 text-gray-500">
                  Hello, Welcome 👋🏻
                </Text>
                <Text className="font-quicksand-semibold text-base text-gray-500">
                  Asraf Takayuma
                </Text>
              </View>

              <Image
                source={images.profile}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
                className="size-10 h-full w-full overflow-hidden rounded-full"
              />
            </View>

            <SearchInput />

            <FilterLabel />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
