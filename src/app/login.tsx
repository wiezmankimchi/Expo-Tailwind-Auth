import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "lib/context/authContext";

const login = () => {
  const authState = useContext(AuthContext);
  return (
    <View className="flex-1 justify-center">
      <Text className="text-4xl font-bold text-gray-600">Login</Text>
      <View className="mx-auto mt-4 w-1/2 bg-slate-600 rounded-lg">
        <Button
          title="Log In"
          color={"#FFF"}
          onPress={() => {
            authState.logIn();
          }}
        />
      </View>
    </View>
  );
};

export default login;
