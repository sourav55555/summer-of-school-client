import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Class = ({ data }) => {




  const {
    image,
    name,
    instructorName,
    instructorEmail,
    availableSets,
    price,
    status,
  } = data;

  const [secureUrl] = useAxiosSecure();

  const [classStatus, setClassStatus] = useState(status);

  const [disable, setDisable] = useState(false);

  const [feedback, setFeedback] = useState("");
  console.log(feedback);


  const handleStatus = (string)=>{
      secureUrl.patch(`/class/${data._id}`,{string})
      .then(() => {setClassStatus(string); toast("Class Updated.")})
    }

  useEffect(()=>{
    if(classStatus !== "pending"){

        setDisable(true);
      }
  }, [classStatus])

  const sendFeedback = () =>{
    secureUrl.patch(`/classfeedback/${data._id}`, {feedback})
    .then(()=> setFeedback(" "))

  }
 

  return (
    <div className="p-8 border-2 mt-8 border-black font2 w-4/5 flex items-center gap-10">
      <div>
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
          <p>
            {" "}
            <span className="font-semibold">Instructor Email: </span>{" "}
            {instructorEmail}
          </p>
        </div>
        <div className="flex items-center gap-12">
          <p>
            {" "}
            <span className="font-semibold">Available Sets: </span>{" "}
            {availableSets}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Price: </span> {price}$
          </p>
          <p>
            {" "}
            <span className="font-semibold">Status: </span> {status}
          </p>
        </div>
        <div className="flex items-center gap-6 font-semibold">
          <button onClick={()=> handleStatus("approve")} disabled={disable} className="px-4 py-2 rounded-xl bg-green-300 disabled:opacity-40" >Approve</button>
          <button onClick={() => handleStatus("deny")} disabled={disable} className="bg-red-300 px-4 py-2 rounded-xl disabled:opacity-40">Deny</button>
          <button onClick={()=>window.my_modal_5.showModal()} className="bg-blue-300 px-4 py-2 rounded-xl">Feedback</button>
        </div>
      </div>

      {/* modal  */}

      {/* Open the modal using ID.showModal() method */}
{/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-semibold text-lg">Giver Your Feedback</h3>
    <div className="modal-action flex flex-col">
    <textarea
          onChange={(e)=>setFeedback(e.target.value)}
            id="name"
            label="Feedback"
            type="text"
           rows="7" cols="50" placeholder="Feedback" className="border-2 rounded-xl outline-none p-6"></textarea>
      {/* if there is a button in form, it will close the modal */}
      <div className="flex items-center mt-4 justify-end gap-4">
        <button onClick={sendFeedback} className="py-2 bg-slate-600 text-white rounded-xl w-fit px-3">Send Feedback</button>
        <button className="px-3 py-2 bg-slate-300 rounded-xl w-fit">Close</button>
      </div>
    </div>
  </form>
</dialog>

      



      <Toaster />
    </div>
  );
};

export default Class;
