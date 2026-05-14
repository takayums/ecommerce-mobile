import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CartItem } from "@/components";

export default function Cart() {
  const cartData = [
    {
      name: "products 1",
      price: 12.0,
      quantity: 5,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      name: "products 1",
      price: 12.0,
      quantity: 5,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      name: "products 1",
      price: 12.0,
      quantity: 5,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      name: "products 1",
      price: 12.0,
      quantity: 5,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      name: "products 1",
      price: 12.0,
      quantity: 5,
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        contentContainerClassName="pt-5 px-5 pb-28"
        data={cartData}
        renderItem={({ item }) => <CartItem item={item} />}
        ListHeaderComponent={() => (
          <View className="mb-5 flex items-center justify-center">
            <Text className="font-quicksand-bold text-lg text-gray-800">
              Checkout
            </Text>
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <View className="elevation-md rounded-2xl border border-gray-200 bg-white p-4 shadow-md shadow-black/20">
              <Text className="mb-4 font-quicksand-bold text-base text-gray-600">
                Payment Summary
              </Text>

              <View className="mb-4 border-b border-gray-200 pb-3">
                <View className="my-1 flex flex-row items-center justify-between">
                  <Text className="font-quicksand-semibold text-base capitalize text-gray-600">
                    Total Items (2)
                  </Text>

                  <View className="gap-.5 mb-2 flex flex-row items-center">
                    <Ionicons name="logo-usd" size={14} color={"#6a7282"} />
                    <Text className="font-quicksand-semibold text-base text-gray-500">
                      5000
                    </Text>
                  </View>
                </View>

                <View className="my-1 flex flex-row items-center justify-between">
                  <Text className="font-quicksand-semibold text-base capitalize text-gray-600">
                    Delivery Fee
                  </Text>

                  <View className="gap-.5 mb-2 flex flex-row items-center">
                    <Text className="font-quicksand-semibold text-base text-gray-500">
                      Free
                    </Text>
                  </View>
                </View>

                <View className="my-1 flex flex-row items-center justify-between">
                  <Text className="font-quicksand-semibold text-base capitalize text-gray-600">
                    Total Items (2)
                  </Text>

                  <View className="gap-.5 mb-2 flex flex-row items-center">
                    <Ionicons
                      name="remove-outline"
                      size={14}
                      color={"#6a7282"}
                    />
                    <Ionicons name="logo-usd" size={14} color={"#6a7282"} />
                    <Text className="font-quicksand-semibold text-base text-gray-500">
                      1000
                    </Text>
                  </View>
                </View>
              </View>

              <View className="my-1 flex flex-row items-center justify-between">
                <Text className="font-quicksand-semibold text-base capitalize text-gray-600">
                  Sub Total
                </Text>

                <View className="gap-.5 mb-2 flex flex-row items-center">
                  <Ionicons name="logo-usd" size={14} color={"#6a7282"} />
                  <Text className="font-quicksand-semibold text-base text-gray-500">
                    4000
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="mt-5 flex flex-row items-center justify-center gap-2 rounded-full bg-indigo-500 p-3">
              <Text className="font-quicksand-bold text-base capitalize text-white">
                Order Now
              </Text>
            </TouchableOpacity>
          </>
        )}
      />
    </SafeAreaView>
  );
}
