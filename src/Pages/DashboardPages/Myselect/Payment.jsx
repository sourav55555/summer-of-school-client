import useAuth from "../../../Hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { payment } = useAuth();
  console.log(payment, "pay");
  const [cardError, setCardError] = useState("");

  const stripe = useStripe();
  const element = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();

  console.log(stripe, element, "stri ele")

  const [secureUrl] = useAxiosSecure();

  useEffect(() => {
    secureUrl.post("/create_payment_intent", { payment }).then((res) => {
      console.log(res.data.clientSecret, "secret");
      setClientSecret(res.data.clientSecret);
    });
  }, [payment, secureUrl]);

  console.log(clientSecret, "secret");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error, "error");
      setCardError(error.message);
    } else {
      setCardError(" ");
      console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymas",
            email: user?.email || "anonyumas",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError);
    }

    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
    }
  };

  return (
    <div>
      <p>Payment Amount: {payment}$</p>

      <div>
        <form onSubmit={handleSubmit}>
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
            className="px-4 py-2 bg-yellow-700 text-white rounded-xl mt-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>

        {cardError && <p className="text-red-600">{cardError}</p>}
      </div>
    </div>
  );
};

export default Payment;
