import { AuthProvider } from "@/context/auth.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { Suspense } from "react";
import { Text } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Slot />
        </Suspense>
      </AuthProvider>
    </QueryClientProvider>
  );
}
