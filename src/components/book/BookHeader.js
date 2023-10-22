import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

export default function BookHeader() {
  const navigation = useNavigation();
  return (
    <View
      className="w-screen items-start pl-5 pb-2"
      style={{ paddingTop: Constants.statusBarHeight + 15 }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-white font-bold text-xl">Back</Text>
      </TouchableOpacity>
    </View>
  );
}
