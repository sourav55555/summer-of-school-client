import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";

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

  const [classes, refetch] = useClasses();

  const [secureUrl] = useAxiosSecure();

  const [classStatus, setClassStatus] = useState(status);

  const [disable, setDisable] = useState(false);

  const [feedback, setFeedback] = useState("");
  console.log(feedback);

  const handleStatus = (string) => {
    secureUrl.patch(`/class/${data._id}`, { string }).then(() => {
      setClassStatus(string);
      toast("Class Updated.");
      refetch();
    });
  };

  useEffect(() => {
    if (classStatus !== "pending") {
      setDisable(true);
    }
  }, [classStatus]);

  const sendFeedback = () => {
    console.log(data._id);
    secureUrl.put(`/classfeedback/${data._id}`, { feedback }).then((res) => {
      console.log(res.data, "feed");
      setFeedback(" ");
      toast("Feedback Send.");
    });
  };

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
          <button
            onClick={() => handleStatus("approved")}
            disabled={disable}
            className="px-4 py-2 rounded-xl bg-green-300 disabled:opacity-40"
          >
            Approve
          </button>
          <button
            onClick={() => handleStatus("deny")}
            disabled={disable}
            className="bg-red-300 px-4 py-2 rounded-xl disabled:opacity-40"
          >
            Deny
          </button>
          <label
            htmlFor={`my_modal_${data._id}`}
            className="bg-blue-300 px-4 py-2 rounded-xl"
          >
            Feedback
          </label>
        </div>
      </div>

      {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`my_modal_${data._id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-fit">
          <h3 className="font-semibold text-lg">Giver Your Feedback</h3>
          <textarea
            onChange={(e) => setFeedback(e.target.value)}
            id="name"
            label="Feedback"
            type="text"
            defaultValue={feedback}
            rows="7"
            cols="40"
            placeholder="Feedback"
            className="border-2 rounded-xl outline-none p-6"
          ></textarea>
          <div className="modal-action">
            <div className="flex items-center mt-4 justify-end gap-4">
              <label
                htmlFor={`my_modal_${data._id}`}
                onClick={sendFeedback}
                className="py-2 bg-slate-600 text-white rounded-xl w-fit px-3 cursor-pointer"
              >
                Send Feedback
              </label>
              <label
                className="px-3 py-2 bg-slate-300 rounded-xl w-fit cursor-pointer"
                htmlFor={`my_modal_${data._id}`}
              >
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Class;
