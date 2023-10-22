import React from "react";
import { View, Text } from "react-native";

export default function ReaderView({ route, navigation }) {
  const { title } = route.params;
  return (
    <View className="flex flex-1 w-screen h-screen justify-center items-center">
      <Text className="text-white font-bold text-4xl">
        {JSON.stringify(title)}
      </Text>
    </View>
  );
}
