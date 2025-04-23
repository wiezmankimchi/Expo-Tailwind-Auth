import { StatusBar } from "expo-status-bar";
import "../global.css";
import { Stack } from "expo-router";
import AuthProvider from "lib/context/authContext";

export default function Layout() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(protected)" options={{ animation: "none" }} />
        <Stack.Screen name="login" />
      </Stack>
    </AuthProvider>
  );
}
