import { User } from "@/types";
import axios from "axios";

export async function getUser(): Promise<User> {
  const res = await axios({
    method: "post",
    url: "https://dummyjson.com/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: {
      username: 'emilys',
      password: 'emilyspass',
    },
  });
  return res.data;
}
