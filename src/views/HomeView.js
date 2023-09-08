import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import BaseLayout from "../layouts/BaseLayout";

export default function HomeView() {
  return (
    <BaseLayout>
      <Text className="text-red-700">World</Text>
    </BaseLayout>
  );
}
