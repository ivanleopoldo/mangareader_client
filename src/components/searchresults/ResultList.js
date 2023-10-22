import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultCard from "./ResultCard";

export default function ResultList() {
  const DATA = [
    {
      id: 1,
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      id: 2,
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      id: 3,
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      id: 4,
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      id: 5,
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
    {
      id: 6,
      title: "hello",
      imageSrc: "https://avt.mkklcdnv6temp.com/25/m/1-1583464697.jpg",
    },
  ];
  const navigation = useNavigation();

  return (
    <View className="flex">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Book")}>
            <ResultCard title={item.title} imageSrc={item.imageSrc} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
