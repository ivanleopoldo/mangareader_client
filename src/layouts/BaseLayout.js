import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/default/SearchBar";

export default function BaseLayout({ children }) {
  return (
    <View className="flex h-screen items-center">
      <View className="sticky top-14 items-center w-screen sm:w-10/12 md:w-1/2 lg:w-2/5">
        <SearchBar />
      </View>
      <View className="flex h-screen justify-center">{children}</View>
    </View>
  );
}
