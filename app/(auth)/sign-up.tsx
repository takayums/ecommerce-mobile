import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function SignUp() {
  return (
    <View className="flex-1 justify-center border p-5">
      <Text className="mb-2 font-quicksand-bold text-2xl leading-5">
        Create Account
      </Text>
      <Text className="font-quicksand-medium text-sm text-gray-500">
        Start shopping with create your account
      </Text>

      <View className="mt-5">
        <View className="mb-3">
          <Text className="mb-1 font-quicksand-semibold text-base capitalize">
            Username
          </Text>
          <TextInput
            placeholder="Enter Your username"
            className="w-full rounded-lg border p-3 font-quicksand-medium text-base leading-5 text-gray-800"
          />
        </View>

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
            Sign Up
          </Text>
        </TouchableOpacity>

        <View className="mt-5 flex flex-row items-center justify-center gap-1">
          <Text className="font-quicksand text-base leading-3 text-gray-500">
            Already have an account?
          </Text>
          <Link
            href="/sign-in"
            className="font-base font-quicksand-semibold text-indigo-600"
          >
            Login
          </Link>
        </View>
      </View>
    </View>
  );
}
