import { getUser, login, logout } from "@/actions/auth";
import { setAuthToken } from "@/lib/secure-storage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { router } from 'expo-router';

export function useGetUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { username: string; password: string }) => login(data.username, data.password),
    onSuccess: async (data) => {
      const { accessToken, refreshToken } = data;
      await setAuthToken({ key: 'alt-todo-access-token', value: accessToken });
      await setAuthToken({ key: 'alt-todo-refresh-token', value: refreshToken });
      queryClient.setQueryData(['user'], data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.replace('/');
    }
  })
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  })
}
