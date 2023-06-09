import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const img_token =   import.meta.env.VITE_IMGAPI;

const AddClass = () => {
  const { user } = useAuth();
  const [secureUrl] = useAxiosSecure();

  const img_hosting = `https://api.imgbb.com/1/upload?key=${img_token}`;

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    const formData=  new FormData();
    formData.append("image" , data.image[0])

    fetch(img_hosting,{
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(res =>{
        if(res.success){
            const image = res.data.display_url;
            const {name, instructorName, instructorEmail, availableSets, price} = data;
            const newClass = { name, image, instructorName, instructorEmail, availableSets: parseFloat(availableSets), price: parseFloat(price) , status: "pending" }
            secureUrl.post("/class", {newClass})
            .then(data => {console.log(data); toast.success("Class Added Successfully."); reset()})
            .catch(error => console.error(error))
        }
    })
  };





  return (
    <div className="pt-16">
      <p className="text-4xl font-semibold font1">Add A Class</p>

      <div className="border-[3px] border-[#8e6e35] rounded-2xl p-10 font2 w-3/4 mt-20">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="px-4 py-3 bg-slate-200 rounded-xl border-b-[3px] border-[#8e6e35] placeholder:text-slate-800"
            {...register("name", { required: true })}
            placeholder={"Enter Class Name"}
          />
          <input
            className="px-4 py-3 bg-slate-200 rounded-xl border-b-[3px] border-[#8e6e35] placeholder:text-slate-800"
            {...register("image", { required: true })}
            type="file"
            placeholder="Select Class image"
          />
          <input
            className="px-4 py-3 bg-slate-200 rounded-xl border-b-[3px] border-[#8e6e35] placeholder:text-slate-800"
            {...register("instructorName", { required: true })}
            value={user.displayName}
          />
          <input
            className="px-4 py-3 bg-slate-200 rounded-xl border-b-[3px] border-[#8e6e35] placeholder:text-slate-800"
            {...register("instructorEmail", { required: true })}
            value={user.email}
          />
          <input
            className="px-4 py-3 bg-slate-200 rounded-xl border-b-[3px] border-[#8e6e35] placeholder:text-slate-800"
            {...register("availableSets", { required: true })}
            type="number"
            placeholder="Available Sets"
          />
          <input
            className="px-4 py-3 bg-slate-200 rounded-xl border-b-[3px] border-[#8e6e35] placeholder:text-slate-800"
            {...register("price", { required: true })}
            type="number"
            placeholder="Price"
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          {/* <input className="col-span-2" type="submit" />  */}
          <div className="parent-btn col-span-2 text-center mt-6">
            <button type="submit" className="button3">Add Class</button>
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default AddClass;
