import { HeaderBar } from "@/components";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { images } from "@/constants";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white px-5 pt-5">
      <HeaderBar label="Profile" />

      <View className="flex items-center justify-center">
        <View className="mb-10 flex size-28 items-center justify-center overflow-hidden rounded-full object-contain">
          <Image
            source={images.profile}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>

        <View className="mb-4 w-full">
          <Text className="mb-2 font-quicksand-bold text-base">Username</Text>
          <View className="flex flex-row items-center justify-start gap-3 rounded-xl border border-gray-200 p-4">
            <Ionicons name="person-outline" size={18} color="#6a7282" />
            <Text className="font-quicksand-medium text-base text-gray-800">
              Magdalena Succrose
            </Text>
          </View>
        </View>
        <View className="mb-4 w-full">
          <Text className="mb-2 font-quicksand-bold text-base">Email</Text>
          <View className="flex flex-row items-center justify-start gap-3 rounded-xl border border-gray-200 p-4">
            <Ionicons name="mail-outline" size={18} color="#6a7282" />
            <Text className="font-quicksand-medium text-base text-gray-800">
              asraf@gmail.com
            </Text>
          </View>
        </View>
        <View className="mb-4 w-full">
          <Text className="mb-2 font-quicksand-bold text-base">Password</Text>
          <View className="flex flex-row items-center gap-3 rounded-xl border border-gray-200 p-4">
            <Ionicons name="key-outline" size={18} color="#6a7282" />
            <Text className="font-quicksand-medium text-base text-gray-800">
              ********
            </Text>
            <Ionicons
              name="eye-off-outline"
              className="ml-auto"
              size={18}
              color="#6a7282"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
