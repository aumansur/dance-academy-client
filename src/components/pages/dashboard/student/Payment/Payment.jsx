import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
const Payment = () => {
  const data = useLoaderData();
  const price = data?.price;
  console.log(price);
  if (!data) {
    return <p>loading....</p>;
  }

  return (
    <div>
      <h1 className="text-4xl mb-10 font-semibold text-center">Pay Now</h1>

      <Elements stripe={stripePromise}>
        <CheckOutFrom data={data} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
