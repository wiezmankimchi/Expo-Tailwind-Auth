import { Redirect, Stack } from "expo-router";
import { AuthContext } from "lib/context/authContext";
import { useContext } from "react";

const isLoggedIn = true;

const ProtectedRouteLayout = () => {
  const authState = useContext(AuthContext);

  if (!authState.isReady) {
    return null;
  }

  if (!authState.isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default ProtectedRouteLayout;
