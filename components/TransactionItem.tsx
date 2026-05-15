// library
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TransactionItem({ data }) {
  return (
    <View className="elevation-md rounded-xl border border-gray-200 bg-white p-3 shadow-md">
      {/* Header */}
      <View className="flex flex-row items-center justify-between border-b border-gray-200 pb-2">
        <View className="flex flex-row items-center gap-1">
          <Ionicons name="bag-handle" size={24} color="#6a7282" />

          <View className="flex">
            <Text className="font-quicksand-semibold text-sm leading-tight">
              Belanja
            </Text>
            <Text className="font-quicksand text-xs">12, Oktober 2022</Text>
          </View>
        </View>

        <View className="flex flex-row items-center">
          <Text className="rounded-lg border-green-200 bg-green-100 px-1.5 py-1 font-quicksand-bold text-sm text-green-800">
            Selesai
          </Text>
          <Ionicons
            name="ellipsis-vertical-outline"
            size={18}
            color="#6a7282"
          />
        </View>
      </View>
      {/* Body */}
      <View className="flex gap-2 py-2">
        {/* Item Barang */}
        <View className="flex flex-row items-center gap-3">
          <View className="flex size-12 items-center justify-center overflow-hidden rounded-lg">
            <Image
              source={{ uri: data.image }}
              className="size-full object-contain"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text className="font-quicksand-semibold text-base capitalize">
              {data.name}
            </Text>
            <Text className="font-quicksand text-sm capitalize">1 Barang</Text>
          </View>
        </View>

        {/* Item Barang */}
        <View className="flex flex-row items-center gap-3">
          <View className="flex size-12 items-center justify-center overflow-hidden rounded-lg">
            <Image
              source={{ uri: data.image }}
              className="size-full object-contain"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text className="font-quicksand-semibold text-base capitalize">
              {data.name}
            </Text>
            <Text className="font-quicksand text-sm capitalize">1 Barang</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="flex flex-row items-center justify-between py-2">
        <View>
          <Text className="font-quicksand text-sm">Total Belanja</Text>
          <Text className="font-quicksand-bold text-sm">Rp. 5000</Text>
        </View>

        <View>
          <TouchableOpacity className="brder rounded-lg border-green-200 bg-green-500 px-1.5 py-1">
            <Text className="font-quicksand-semibold text-sm text-white">
              Beli Lagi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
