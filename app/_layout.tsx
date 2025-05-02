import { AuthProvider } from "@/context/auth.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack >
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
          <Stack.Screen name="log-in" options={{ animation: "none" }} />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}
