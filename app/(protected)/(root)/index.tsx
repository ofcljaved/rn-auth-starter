import { useLogout } from "@/hooks/auth.hook";
import { Button, Text, View } from "react-native";

export default function Index() {
  const logoutMutation = useLogout();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello World</Text>
      <Button onPress={() => {
        logoutMutation.mutate();
      }}
        title="Sign Out" />
    </View>

  );
}
