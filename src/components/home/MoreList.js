import React from "react";
import { View, Text, SectionList, FlatList } from "react-native";
import BookCard from "./BookCard";

const Item = ({ body }) => (
  <View className="p-10">
    <Text className="text-white text-xl">{body}</Text>
  </View>
);

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
    <View className="w-screen pt-2">
      <Text className="text-white text-3xl font-bold pb-4">More</Text>
      <FlatList
        key={"_"}
        scrollEnabled={false}
        onEndReached={() => console.log("end")}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        numColumns={3}
        renderItem={({ item }) => (
          <BookCard title={item.title} imageSrc={item.imageSrc} />
        )}
      />
    </View>
  );
}
