import { Platform } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS === "android" ? 18 : 25,
          marginHorizontal: 30,
          paddingTop: 10,
          borderRadius: 50,
          height: 60,
          alignSelf: "center",
          backgroundColor: "white",
          paddingHorizontal: 8,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#1a1a1a",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color="#6a7282" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={28} color="#6a7282" />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          tabBarIcon: ({ color }) => (
            <Ionicons name="receipt-outline" size={28} color="#6a7282" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color="#6a7282" />
          ),
        }}
      />
    </Tabs>
  );
}
