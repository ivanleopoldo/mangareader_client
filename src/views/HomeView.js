import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { HomeLayout } from "../layouts";
import HotCarousel from "../components/home/HotCarousel";
import MoreList from "../components/home/MoreList";
import ResultList from "../components/searchresults/ResultList";

export default function HomeView() {
  return (
    <HomeLayout>
      <StatusBar style="light" />
      <View className="px-5">
        <ResultList />
        {/* <HotCarousel />
        <MoreList /> */}
      </View>
    </HomeLayout>
  );
}
