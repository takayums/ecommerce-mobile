import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CartItem({ item }) {
  return (
    <View className="mb-3 flex flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-3 shadow-md shadow-black/20">
      <View className="flex flex-row items-center gap-2">
        {/* Thumbnail  */}
        <View className="flex size-24 items-center justify-center rounded-lg">
          <Image
            source={{ uri: item.image }}
            className="size-full"
            resizeMode="contain"
          />
        </View>

        <View>
          <Text
            className="mb-.5 font-quicksand-bold text-base capitalize text-gray-600"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>

          <View className="gap-.5 mb-2 flex flex-row items-center">
            <Ionicons name="logo-usd" size={14} color={"#05df22"} />
            <Text className="font-quicksand-medium text-base">
              {item.price}
            </Text>
          </View>

          <View className="flex flex-row items-center gap-4">
            <TouchableOpacity className="flex size-6 flex-row items-center justify-center rounded-lg bg-indigo-400/10">
              <Ionicons name="remove-sharp" size={18} color={"#615fff"} />
            </TouchableOpacity>
            <Text className="font-quicksand-semibold text-base text-gray-500">
              {item.quantity}
            </Text>
            <TouchableOpacity className="flex size-6 flex-row items-center justify-center rounded-lg bg-indigo-400/10">
              <Ionicons name="add-sharp" size={18} color={"#615fff"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity className="flex flex-row items-center justify-center">
        <Ionicons name="trash-outline" size={18} color={"#fb2c36"} />
      </TouchableOpacity>
    </View>
  );
}
