import { useAuth } from "@/context/auth.context";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function ProtectedLayout() {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Redirect href="/log-in" />
  }

  return (
    <Stack />
  );
}
