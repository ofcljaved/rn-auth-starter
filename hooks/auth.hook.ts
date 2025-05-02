import { getUser } from "@/actions/auth";
import { useQuery } from "@tanstack/react-query";

export function useGetUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: Infinity,
  });
}
