import { useLogout } from '@/hooks/auth.hook';
import { Text, View } from 'react-native';

export default function Index() {
  const logoutMutation = useLogout();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          logoutMutation.mutate();
        }}>
        Sign Out
      </Text>
    </View>
  );
}

