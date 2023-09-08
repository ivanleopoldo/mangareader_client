import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar() {
  const [keyword, setKeyword] = useState(null);
  const [clicked, setClicked] = useState(false);
  const refInput = useRef();

  return (
    <TouchableWithoutFeedback onPress={() => refInput.current.focus()}>
      <View className="flex flex-row rounded-xl mx-20 w-10/12 px-5 py-3 border border-solid bg-neutral-700 border-neutral-600">
        <TextInput
          ref={refInput}
          returnKeyType="done"
          placeholder="search"
          placeholderTextColor="#737373"
          value={keyword}
          className="w-11/12 text-white"
          onChangeText={setKeyword}
          onSubmitEditing={() => {
            console.log(keyword);
            refInput.current.clear();
            setClicked(false);
          }}
          onFocus={() => setClicked(true)}
        />
        <TouchableOpacity
          onPress={() => {
            clicked ? refInput.current.clear() : refInput.current.focus();
          }}
          hitSlop={{ top: 25, bottom: 25, left: 15, right: 25 }}
        >
          <View className="ml-3">
            <FontAwesome
              name={clicked ? "close" : "search"}
              size={15}
              color="#737373"
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
