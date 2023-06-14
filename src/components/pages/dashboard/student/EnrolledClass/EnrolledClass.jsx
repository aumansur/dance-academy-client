import usePayment from "../../../../../hooks/usePayment";
import EnrolledCard from "./EnrolledCard";

const EnrolledClass = () => {
  const [paymentData, loading] = usePayment();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="py-5 px-10">
      <h1 className="text-4xl mb-10 font-semibold text-center">
        Enrolled Classes
      </h1>
      <table className="w-full border text-center">
        <thead className="text-xl bg-primary text-white">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">Class Img</th>
            <th className="p-3 border">Classes Name</th>
            <th className="p-3 border">User Email</th>
            <th className="p-3 border">Total Price</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {paymentData?.map((item, index) => (
            <EnrolledCard key={item?._id} index={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClass;
