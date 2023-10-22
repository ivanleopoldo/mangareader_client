import React from "react";
import { View, Text } from "react-native";

export default function ChapterCard({ title, date }) {
  return (
    <View className="flex flex-row p-4 m-1 justify-between">
      <Text className="text-white text-lg font-bold">{title}</Text>
      <Text className="text-white text-lg">{date}</Text>
    </View>
  );
}
