import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function SignIn() {
  return (
    <View className="flex-1 justify-center p-5">
      <Text className="mb-1 font-quicksand-bold text-2xl text-gray-600">
        Login Account
      </Text>
      <Text className="font-quicksand-medium text-sm text-gray-400">
        Please login with registered your account
      </Text>

      <View className="mt-5">
        <View className="mb-3">
          <Text className="mb-1 font-quicksand-semibold text-base capitalize text-gray-500">
            Email
          </Text>
          <TextInput
            placeholder="Enter Your Email"
            className="w-full rounded-lg border border-gray-300 p-3 font-quicksand-medium text-base text-gray-500"
            style={{ fontFamily: "Quicksand-Medium" }}
          />
        </View>

        <View>
          <Text className="mb-1 font-quicksand-semibold text-base capitalize text-gray-500">
            Password
          </Text>
          <TextInput
            placeholder="Enter Your Password"
            className="w-full rounded-lg border border-gray-300 p-3 font-quicksand-medium text-base text-gray-500"
            style={{ fontFamily: "Quicksand-Medium" }}
          />
        </View>

        <TouchableOpacity className="mt-9 rounded-lg border-none bg-indigo-500 p-3 outline-none">
          <Text className="text-center font-quicksand-semibold text-lg text-white">
            Sign In
          </Text>
        </TouchableOpacity>

        <View className="mt-5 flex flex-row items-center justify-center gap-1">
          <Text className="font-quicksand text-base text-gray-500">
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
