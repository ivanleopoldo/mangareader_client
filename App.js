import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeView, BookView, ReaderView } from "./src/views";
import DefaultTheme from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "#1E1E1E",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Book"
          component={BookView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reader"
          component={ReaderView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
