import { Tabs } from "expo-router";
import { SafeAreaView, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  return (
    <SafeAreaView className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarStyle: { height: 58, marginTop: 1, marginBottom: 1 },
        }}
        backBehavior="order"
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            animation: "shift",
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            title: "Second",
            popToTopOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-2-box-outline"
                size={size}
                color={color}
              />
            ),
            animation: "shift",
          }}
        />
        <Tabs.Screen
          name="third"
          options={{
            title: "Third",
            popToTopOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-3-box-outline"
                size={size}
                color={color}
              />
            ),
            animation: "fade",
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
