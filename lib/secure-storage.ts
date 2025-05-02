import { setItemAsync, getItemAsync, deleteItemAsync } from 'expo-secure-store';

const KEYS = [
  'alt-todo-access-token',
  'alt-todo-refresh-token',
] as const;

interface SetAuthToken {
  key: typeof KEYS[number]
  value: string;
}

export async function setAuthToken({ key, value }: SetAuthToken) {
  await setItemAsync(key, value);
}

export async function getAuthToken(key: typeof KEYS[number]) {
  return await getItemAsync(key);
}

export async function clearAuthToken(key: typeof KEYS[number]) {
  await deleteItemAsync(key);
}
