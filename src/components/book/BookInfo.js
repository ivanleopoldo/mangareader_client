import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import ChapterCard from "./ChapterCard";
import { useNavigation } from "@react-navigation/native";

export default function BookInfo() {
  const DATA = [
    { id: 1, title: "Chapter 1", url: "test", date: "test" },
    { id: 2, title: "Chapter 2", url: "test", date: "test" },
    { id: 3, title: "Chapter 3", url: "test", date: "test" },
    { id: 4, title: "Chapter 4", url: "test", date: "test" },
    { id: 5, title: "Chapter 5", url: "test", date: "test" },
    { id: 6, title: "Chapter 6", url: "test", date: "test" },
    { id: 7, title: "Chapter 7", url: "test", date: "test" },
    { id: 8, title: "Chapter 8", url: "test", date: "test" },
    { id: 9, title: "Chapter 9", url: "test", date: "test" },
  ];
  const navigation = useNavigation();
  return (
    <View className="flex flex-1 flex-col">
      <View className="flex flex-row pb-5">
        <Image
          style={{ aspectRatio: 5 / 7, height: 200 }}
          borderRadius={7}
          source={{
            uri: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
          }}
        />
        <View className="flex">
          <Text className="text-white font-bold text-2xl p-5">Text</Text>
        </View>
      </View>
      <View className="flex flex-1 h-screen">
        <Text className="text-white text-3xl font-bold pb-2">Chapter List</Text>
        <View className="flex bg-slate-800 rounded-xl">
          <FlatList
            scrollEnabled={false}
            data={DATA}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Reader", { title: DATA[index].title })
                }
              >
                <ChapterCard title={item.title} date={item.date} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}
