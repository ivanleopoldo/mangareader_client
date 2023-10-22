import React from "react";
import { View, Text } from "react-native";
import BookLayout from "../layouts/BookLayout";
import BookInfo from "../components/book/BookInfo";

export default function BookView() {
  return (
    <BookLayout>
      <BookInfo />
    </BookLayout>
  );
}
