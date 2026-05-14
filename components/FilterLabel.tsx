import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { ICategory } from "@/types/product";

export default function FilterLabel() {
  const [category, setCategory] = useState<ICategory[]>([]);

  const dataCategoryFetch = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const dataCategory = await res.json();
      setCategory(dataCategory);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dataCategoryFetch();
  }, []);
  return (
    <View>
      <FlatList
        data={category}
        horizontal
        contentContainerClassName="pt-5"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="group mr-2 rounded-lg border border-gray-300 bg-white px-3 py-2 hover:bg-indigo-500">
            <Text className="font-quicksand-medium text-xs text-gray-500 group-hover:text-white">
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
