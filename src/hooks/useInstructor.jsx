import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {
    data: instructorData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("https://dance-academy-server-aumansur.vercel.app/instructors");
      return res.json();
    },
  });
  return [instructorData, loading, refetch];
};

export default useInstructor;
