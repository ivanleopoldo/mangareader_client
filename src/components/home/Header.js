import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Header({ title }) {
  const [keyword, setKeyword] = useState(null);
  const [focused, setFocused] = useState(false);
  const refInput = useRef();

  return (
    <View
      className="w-screen items-start "
      style={{ paddingTop: Constants.statusBarHeight + 15 }}
    >
      <View className="pl-3 pb-3">
        <Text className="text-4xl text-white font-bold">{title}</Text>
      </View>
      <View className="w-screen items-center pb-2">
        <TouchableWithoutFeedback onPress={() => refInput.current.focus()}>
          <View className="flex flex-row rounded-xl mx-3 mb-4 px-5 py-3 border border-solid bg-neutral-700 border-neutral-600">
            <TextInput
              ref={refInput}
              returnKeyType="done"
              textAlign="left"
              value={keyword}
              className="w-11/12 text-white"
              onChangeText={setKeyword}
              keyboardAppearance="dark"
              onSubmitEditing={() => {
                console.log(keyword);
                refInput.current.clear();
                setFocused(false);
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <TouchableOpacity
              onPress={() => {
                focused ? refInput.current.clear() : refInput.current.focus();
              }}
              hitSlop={{ top: 25, bottom: 25, left: 15, right: 25 }}
            >
              <View className="ml-3">
                <FontAwesome
                  name={focused ? "close" : "search"}
                  size={15}
                  color="#737373"
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
