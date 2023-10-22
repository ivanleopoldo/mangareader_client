import React from "react";
import { View, Text, SectionList, FlatList, Image } from "react-native";
import BookCard from "./BookCard";

export default function HotCarousel({ items }) {
  const DATA = [
    {
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
  ];
  return (
    <View className="w-screen">
      <Text className="text-3xl text-white font-bold pb-4">Hot</Text>
      <FlatList
        style={{ marginRight: 45 }}
        onEndReached={() => console.log("end")}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <BookCard title={item.title} imageSrc={item.imageSrc} />
        )}
      />
    </View>
  );
}
