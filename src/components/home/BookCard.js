import React from "react";
import { Text, View, Image } from "react-native";

export default function BookCard({ title, imageSrc }) {
  return (
    <View className="flex flex-col px-2 pb-4 items-center">
      <Image
        borderRadius={7}
        source={{ uri: imageSrc }}
        style={{ aspectRatio: 5 / 7, height: 135 }}
        resizeMode="cover"
      />
      <Text className="text-white pt-2 font-semibold">{title}</Text>
    </View>
  );
}
