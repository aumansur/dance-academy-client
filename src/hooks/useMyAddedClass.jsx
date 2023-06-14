import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useMyAddedClass = () => {
  const { user, loading } = useAuth();
  const {
    data: addedClassData = [],
    isLoading: Addedloading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myAddedClasses/${user?.email}`
      );
      return res.json();
    },
  });
  return [addedClassData, Addedloading, refetch];
};

export default useMyAddedClass;
