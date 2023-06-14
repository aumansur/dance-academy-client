import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {
    data: classData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/classes"
      );
      return res.json();
    },
  });
  return [classData, loading, refetch];
};

export default useClasses;
