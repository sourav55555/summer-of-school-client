import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../../../Hooks/useAuth";
import Payment from './Payment';


const stripePromise = loadStripe(import.meta.env.VITE_PAY)

const Checkout = () => {

    const {payment} = useAuth();
    console.log(payment,"chek")

    const paymentAmount = payment;
    const price = parseFloat(paymentAmount.toFixed(2))

    return (
        <div className="w-2/4 mx-auto">
            <p className="mb-6">This is payment method.</p>

            <Elements stripe={stripePromise}>
                <Payment price= {price}/>
            </Elements>
        </div>
    );
};

export default Checkout;