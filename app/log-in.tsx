import { useLogin } from '@/hooks/auth.hook';
import { Text, View } from 'react-native';

export default function SignIn() {
  const loginMutation = useLogin();
  const handleLogin = (username: string, password: string) => {
    loginMutation.mutate({ username, password });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          handleLogin('emilys', 'emilyspass');
        }}>
        {loginMutation.isPending ? 'Logging in...' : 'Log in'}
      </Text>
    </View>
  );
}

