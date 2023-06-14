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
        `http://localhost:5000/userSeclectedClass/${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedClassesData, loading, refetch];
};

export default useSelectedClass;
