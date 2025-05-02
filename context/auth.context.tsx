import { useGetUser } from "@/hooks/auth.hook";
import { User } from "@/types";
import { createContext, PropsWithChildren, use } from "react";

const AuthContext = createContext<{
  user: User | undefined;
  isLoading: boolean;
}>({
  user: undefined,
  isLoading: false,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const { data: user, isLoading } = useGetUser();
  return (
    <AuthContext value={{ user, isLoading }}>
      {children}
    </AuthContext>
  )
}

export function useAuth() {
  const user = use(AuthContext);
  if (!user) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return user;
}
