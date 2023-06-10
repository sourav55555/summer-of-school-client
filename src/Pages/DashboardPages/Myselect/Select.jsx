import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";



const Select = ({data, handleDelete}) => {

    const navigate = useNavigate();
    const {payment, setPayment} = useAuth();

    const {
        image,
        name,
        instructorName,
        availableSets,
        price,

      } = data;

      const handlePayment = (price) =>{
        setPayment(price);
        navigate("/dashboard/payment")
      }


    return (
        <div className="px-4 py-6 border-2 mt-12 border-black font2 flex items-center gap-6">
      <div className="bg-slate-200 p-4 rounded-xl">
        <img className="w-28 " src={image} alt="" />
      </div>
      <div className="flex-grow space-y-6">
        <div className="flex items-center justify-between">
          <p>
            {" "}
            <span className="font-semibold">Class: </span> {name}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Instructor: </span> {instructorName}
          </p>

        </div>
        <div className="flex items-center gap-12">
          <p>
            {" "}
            <span className="font-semibold">Available Sets: </span>{" "}
            {availableSets}
          </p>
          <p>
            <span className="font-semibold">Price: </span> {price}$
          </p>

        </div>
        <div className="flex items-center gap-4 font-semibold">
          <button
            onClick={() => handlePayment(data.price)}
            className="px-4 py-2 rounded-xl bg-green-300 disabled:opacity-40"
          >
            Pay
          </button>
          <button onClick={() => handleDelete(name)} className="px-4 py-2 rounded-xl bg-red-600 text-white disabled:opacity-40">Delete</button>
          
        </div>
      </div>
    </div>
    );
};

export default Select;