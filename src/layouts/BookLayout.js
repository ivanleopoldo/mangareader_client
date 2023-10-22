import React from "react";
import { View, Text, ScrollView } from "react-native";
import BookHeader from "../components/book/BookHeader";

export default function BookLayout({ children }) {
  return (
    <View className="flex flex-1 w-screen">
      <BookHeader />
      <ScrollView className="flex flex-1 h-screen w-screen p-5">
        {children}
      </ScrollView>
    </View>
  );
}
