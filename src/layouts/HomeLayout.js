import React from "react";
import { View } from "react-native";
import Header from "../components/home/Header";

export default function HomeLayout({ children }) {
  return (
    <View className="flex h-screen items-center">
      <Header title="Search" />
      <View className="flex flex-1 h-screen w-screen">{children}</View>
    </View>
  );
}
