import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClass = () => {
  const { user } = useAuth();
  const {
    data: selectedClassesData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["userSeclectedClass"],
    queryFn: async () => {
      const res = await fetch(
        `https://dance-academy-server-aumansur.vercel.app/userSeclectedClass/${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedClassesData, loading, refetch];
};

export default useSelectedClass;
