import { useState } from "react";

const Myclass = ({data}) => {

    const {
        image,
        name,
        instructorName,
        instructorEmail,
        availableSets,
        price,
        status,
        feedback,
        students
      } = data;

      const [showFeedback, setShowFeedback] = useState(false);
      const [update, setUpdate] = useState(false);

      useState(()=>{
        if(status == "deny"){
            setShowFeedback(true);
        }
        if(status == "approved"){
            setUpdate(true);
        }

      }, [])


  return (
    <div className="p-8 border-2 mt-12 border-black font2 w-4/5 flex items-center gap-10">
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
            <span className="font-semibold">Price: </span> {price}$
          </p>
          <p>
            <span className="font-semibold">Status: </span> {status}
          </p>
          <p>
            <span className="font-semibold">Students: </span> {students || 0}
          </p>
        </div>
        <div className="flex items-center gap-12 font-semibold">
          <button
            // onClick={() => handleStatus("approve")}
            disabled={update}
            className="px-4 py-2 rounded-xl bg-green-300 disabled:opacity-40"
          >
            Update
          </button>
          <p className={`border-2 p-3 rounded-xl ${showFeedback? "" : "hidden" }`}> <span className="font-semibold">Feedback: </span> {feedback}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Myclass;
