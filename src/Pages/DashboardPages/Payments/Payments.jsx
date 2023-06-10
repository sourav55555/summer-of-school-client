import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Payments = () => {

    const [secureUrl] = useAxiosSecure();
    const {user} = useAuth();

    const {data: payments = [] } = useQuery({
        queryKey: ["payment"],
        queryFn: async ()=>{
            const res = await secureUrl(`/payments/${user.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    console.log(payments);

    return (
        <div className="pt-16">
            <h3 className="text-4xl font-semibold font1">Payment History</h3>
            <div className="flex flex-wrap gap-6 font2 mt-12">
            {
                payments.map(data => <div key={data._id} className="p-6 rounded-xl border-2 border-[#8e6e35] space-y-3">
                    <p> <span className="font-semibold">Class Name:</span> {data.className}</p>
                    <p> <span className="font-semibold">Email: </span> {data.email}</p>
                    <p> <span className="font-semibold">TransactionId: </span> {data.transactionId}</p>
                    <p> <span className="font-semibold">Payment: </span> {data.payment}$</p>
                    <p> <span className="font-semibold">Date: </span> {data.date}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Payments;