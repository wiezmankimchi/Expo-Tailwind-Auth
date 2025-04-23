import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Link } from "expo-router";
import { AuthContext } from "lib/context/authContext";

const Third = () => {
  const authState = useContext(AuthContext);

  return (
    <View className="flex-1 justify-center">
      <Text className="text-4xl font-bold text-red-600">Third</Text>
      <Link href="/" className="my-2 text-xl font-semibold text-gray-300">
        Home
      </Link>
      <Link
        replace
        href="/second"
        className="my-2 text-xl font-semibold text-blue-300"
      >
        second
      </Link>
      <View className="mx-auto mt-4 w-1/2 bg-slate-600 rounded-lg">
        <Button
          title="Log Out"
          color={"#FFF"}
          onPress={() => {
            authState.logOut();
          }}
        />
      </View>
    </View>
  );
};

export default Third;
