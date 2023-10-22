import React from "react";
import { View, Text, Image } from "react-native";

export default function ResultCard({ title, imageSrc }) {
  return (
    <View className="flex flex-row w-screen pb-4">
      <Image
        borderRadius={7}
        style={{ aspectRatio: 5 / 7, height: 130 }}
        source={{ uri: imageSrc }}
      />
      <Text className="text-white text-2xl font-bold p-5 text-left">
        {title}
      </Text>
    </View>
  );
}
