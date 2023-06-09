import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const User = ({data, handleRefetch}) => {

    const {name, email, photo, gender, role, phone} = data;

    const [roledata, setRoledata] = useState(role);
    const [secureUrl] = useAxiosSecure();

    const handleRole = text => {
        secureUrl.patch(`/roleuser/${data._id}`, {role: text})
        .then(res => {
            console.log(res.data); handleRefetch(); 
            toast.success("Role Updated."); 
            setRoledata(text);
        })
    }



    return (
        <div className="mt-10">
            <div className="flex items-center w-3/4 font2 gap-6  border-b-4 border-[#8e6e35] rounded-2xl p-6">
                <div className="w-1/4 p-3">
                    <img className="" src={photo} alt="" />
                </div>
                <div className=" space-y-5">
                    <div className="flex items-center justify-between">
                        <p> <span className="font-semibold"> Name:</span> {name}</p>
                        <p> <span className="font-semibold"> Email:</span> {email}</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                        <p> <span className="font-semibold"> Gender:</span> {gender}</p>
                        <p> <span className="font-semibold"> Role:</span> {roledata}</p>
                        <p> <span className="font-semibold"> Phone:</span> {phone}</p>
                    </div>
                    <div className=" flex items-center justify-start gap-6">
                        <button 
                        onClick={()=> handleRole("instructor")}
                        disabled={roledata === "instructor" ? true : false } 
                        className="px-4 py-2 rounded-xl bg-slate-700 text-white shadow-md shadow-black disabled:opacity-40">Make Instructor</button>

                        <button
                         onClick={()=> handleRole("admin")}
                         disabled={roledata === "admin" ? true : false} 
                         className="px-4 py-2 rounded-xl bg-lime-700 text-white shadow-md shadow-black disabled:opacity-40">Make Admin</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default User;