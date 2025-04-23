import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Second = () => {
  return (
    <View className="flex-1 justify-center">
      <Text className="text-4xl font-bold text-blue-600">Second</Text>
      <Link href="/" className="my-2 text-xl font-semibold text-gray-300">
        Home
      </Link>
      <Link href="/third" className="my-2 text-xl font-semibold text-red-300">
        Third
      </Link>
    </View>
  );
};

export default Second;
