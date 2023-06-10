import useAuth from "../../../Hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast, Toaster } from "react-hot-toast";

const Payment = () => {
  const { payment, paymentClass, setPayment } = useAuth();
  console.log(payment, "pay");
  const [cardError, setCardError] = useState("");

  const stripe = useStripe();
  const element = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState('');

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
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent.id, "successpay");
       // save payment information to the server
       const paymentInfo = {
        className: paymentClass,
        email: user?.email,
        transactionId: paymentIntent.id,
        payment,
        date: new Date()
    }
    secureUrl.post('/payments', paymentInfo)
        .then(res => {
            console.log(res.data, "payment collection");
            if (res.data.insertedId) {
                console.log("payment collection create");
                secureUrl.patch(`/select?email=${user.email}&&class=${paymentClass}`,{status: "enrolled"})
                .then(res => {
                  console.log(res.data,"enroll after");
                  secureUrl.patch(`/dec-class/${paymentClass}`)
                  .then(res => {
                    console.log(res.data, "cleat all");
                    setPayment(0);
                    toast.success("Payment Successful")
                  })

                })
            }
        })
    }
  };

  return (
    <div>
      <p className="my-6 text-xl ">Payment Amount: {payment}$</p>

      <div>
        <form onSubmit={handleSubmit} className="w-1/2 my-3">
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
      <Toaster/>
    </div>
  );
};

export default Payment;
