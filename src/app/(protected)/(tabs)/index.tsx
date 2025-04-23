import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Link } from "expo-router";
import { AuthContext } from "lib/context/authContext";

const Home = () => {
  const authState = useContext(AuthContext);
  return (
    <View className="flex-1 justify-center">
      <Text className="text-4xl font-bold text-gray-600">Home</Text>
      <Link href="/second" className="my-2 text-xl font-semibold text-blue-300">
        Second
      </Link>
      <Link href="/third" className="my-2 text-xl font-semibold text-red-300">
        Third
      </Link>
      
    </View>
  );
};

export default Home;
