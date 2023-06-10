import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useIsInstructor from "../../Hooks/useIsInstructor";

const SingleClass = ({ data }) => {
  const { image, name, instructorName, availableSets, price } = data;

  const [isAdmin] =  useAdmin();
  const [isInstructor] = useIsInstructor();

  const [secureUrl] = useAxiosSecure();

  const {user} = useAuth();

    const [selectbtn, setSelectbtn] = useState(false);

    useState(()=>{
        if(isAdmin || isInstructor){
            setSelectbtn(true);
        }

        if(availableSets === 0){
            setSelectbtn(true);
        } 
    }, [user ,isAdmin, isInstructor])

    const handleSelect = ()=>{
        if(!user){
            return toast.error("Please Login First")
        }
        const selectData ={classname: name, studentname: user.displayName, studentemail: user.email}
        secureUrl.post("/select", {selectData})
        .then(() => {toast.success("Class Added.")})
    }

  return (
    <div className={`border-2 w-fit font2 rounded-2xl border-[#8e6e35] p-4 ${availableSets === 0 ? "bg-red-300" : "" }`}>
      <div className=" mx-auto h-[10rem] dark:bg-[rgb(133,77,255)] bg-amber-100 w-full rounded-2xl p-3">
        <img className="w-[11rem] mx-auto" src={image} alt="" />
      </div>
      <div className="space-y-3 flex-grow p-4">
        
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Instructor:</span> {instructorName}
          </p>

        <div className="flex items-center justify-between gap-8">
          <p>
            <span className="font-semibold">Available Sets:</span> {availableSets}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price}$
          </p>
        </div>
        <div className="parent-btn pt-3">
          <button onClick={handleSelect} disabled={selectbtn} className="button4 disabled:bg-red-800">Select</button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default SingleClass;
