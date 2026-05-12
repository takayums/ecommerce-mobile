import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <Text className="font-quicksand bg-blue-500 text-blue-300 text-xl">
        Home Asraf
      </Text>

      <Link href="/sign-in">Login</Link>
      <Link href="/sign-up">Daftar</Link>
    </SafeAreaView>
  );
}
