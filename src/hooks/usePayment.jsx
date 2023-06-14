import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const usePayment = () => {
  const { user } = useAuth();
  const {
    data: paymentData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payment/${user?.email}`
      );
      return res.json();
    },
  });
  return [paymentData, loading, refetch];
};

export default usePayment;
