import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function SignIn() {
  return (
    <View className="flex-1 justify-center border p-5">
      <Text className="mb-2 font-quicksand-bold text-2xl leading-5">
        Login Account
      </Text>
      <Text className="font-quicksand-medium text-sm text-gray-500">
        Please login with registered your account
      </Text>

      <View className="mt-5">
        <View className="mb-3">
          <Text className="mb-1 font-quicksand-semibold text-base capitalize">
            Email
          </Text>
          <TextInput
            placeholder="Enter Your Email"
            className="w-full rounded-lg border p-3 font-quicksand-medium text-base leading-5 text-gray-800"
          />
        </View>

        <View>
          <Text className="mb-1 font-quicksand-semibold text-base capitalize">
            Password
          </Text>
          <TextInput
            placeholder="Enter Your Password"
            className="w-full rounded-lg border p-3 font-quicksand-medium text-base leading-5 text-gray-800"
          />
        </View>

        <TouchableOpacity className="mt-9 rounded-lg border bg-indigo-600 p-3">
          <Text className="text-center font-quicksand-semibold text-lg text-white">
            Sign In
          </Text>
        </TouchableOpacity>

        <View className="mt-5 flex flex-row items-center justify-center gap-1">
          <Text className="font-quicksand text-base leading-3 text-gray-500">
            Don’t have an account?
          </Text>
          <Link
            href="/sign-up"
            className="font-base font-quicksand-semibold text-indigo-600"
          >
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
}
