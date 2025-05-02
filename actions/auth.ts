import api from "@/lib/api";
import { clearAuthToken, getAuthToken } from "@/lib/secure-storage";
import { User } from "@/types";

export async function getUser(): Promise<User | null> {
  const token = await getAuthToken('alt-todo-access-token');
  //if (!token) {
  //  console.log("I think we're not logged in");
  //  return null;
  //}

  const res = await api.get<User>('/auth/me');
  return res.data;
}

export async function login(username: string, password: string) {
  const res = await api.post<User>('/auth/login', {
    username,
    password,
  });
  return res.data;
}

export async function logout() {
  await clearAuthToken('alt-todo-access-token');
}
