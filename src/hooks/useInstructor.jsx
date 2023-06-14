import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {
    data: instructorData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  return [instructorData, loading, refetch];
};

export default useInstructor;
