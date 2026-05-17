import { HeaderBar } from "@/components";
import TransactionItem from "@/components/TransactionItem";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Transaction() {
  const data = [
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
        data={data}
        renderItem={({ item }) => <TransactionItem data={item} />}
        ListHeaderComponent={<HeaderBar label="Transaction" />}
      />
    </SafeAreaView>
  );
}
