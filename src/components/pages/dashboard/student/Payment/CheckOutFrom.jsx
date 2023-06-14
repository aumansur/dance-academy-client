import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import "./CheckOutFrom.css";

const CheckOutFrom = ({ price, data }) => {
  console.log(price, data);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  // const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setError(confirmError.message);
      setTransactionId("");
    }
    console.log(paymentIntent);
    // setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;

      const payment = {
        email: user?.email,
        transactionId,
        price,
        date: new Date(),
        className: data?.name,
        classImg: data?.image,
        classId: data?._id,
      };
      axiosSecure.post("/payment", payment).then((res) => {
        console.log(res);
        // if (res.data.insertedId) {
        //   //displa
        // }
      });
    }
  };

  return (
    <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary btn-sm"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      {transactionId && (
        <p className="text-green-500 mt-5">
          Payment Done & Your Transaction Id : {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckOutFrom;
