import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bannerimg from "../../assets/bg-images/pngegg (3).png";
import image from "../../assets/log/141.jpg";
import "./Signup.css";
import google from "../../assets/Google-Icon-PNG_rwscww.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useContext } from "react";

const Signup = () => {

    const {user, createUser, googleLog, authdark} = useContext(AuthContext);

    const [secureUrl] = useAxiosSecure();

    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    if(data.password == data.confirm_password){
        const userData = {...data, role:"student"};
        
        createUser(data.email, data.password)
        .then( result => {

            updateProfile(result.user, {
                displayName: data.name, photoURL: data.photo
            })
            .then( ()=>{
                secureUrl.post("/user", userData)
                .then(() => {
                    toast.success('Successfully registered');
                    navigate("/");
                })
            })
            .catch(error => toast.error(`${error.message}`))

          
        })
    }
    else{
        toast.error("Confirm password not matched.")
    }
  };


  // const updateGoogleUser = () =>{

   /*  if(loading){
      return
    }
   else{
    const userData = { name: user.displayName, email: user.email, photo: user.photoURL, role: "user"}
    console.log(userData, "google user");
   } */

    /* secureUrl.post("/user", userData)
      .then(() => {
          toast.success('Successfully registered.');
          navigate("/");
      }) */
  // }


  const handleGoogle = ()=>{
    googleLog()
    .then((data)=> {
        // updateGoogleUser();
        // console.log(data.email, "google email")
    })
  }

  return (
    <div  className='dark:bg-[#061551] dark:text-white pb-28'>
      <div className={` ${authdark ? "dark-page-header" : "page-header"} h-[17rem] md:h-[20rem]`}>
        <div className="md:pt-32 pt-36 px-6 md:px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">Register</span>
          </p>
          <img className="w-[14em] md:block hidden" src={bannerimg} alt="" />
        </div>
      </div>

      <div className="min-h-screen flex md:flex-row flex-col justify-center items-center pb-32">
        <div className="md:w-1/2 mt-16">
          <img className="w-[35rem] mx-auto rounded-3xl" src={image} alt="" />
        </div>
        <div className="md:w-1/2 mt-8">
          <div className=" h-full w-full border-l-4 px-6 md:p-12 mx-auto flex items-center flex-col gap-5 justify-center ">
            <form
              className="flex flex-col md:w-3/5 mt-8 mx-auto items-center justify-center dark:text-black"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="w-full px-6 py-3 dark:bg-slate-200 placeholder:text-black bg-[rgba(142,110,53,.4)]  "
                {...register("name", { required: true })}
                placeholder="Enter Your Full Name"
              />
              <input
                className="w-full px-6 mt-4 py-3 dark:bg-slate-200 placeholder:text-black bg-[rgba(142,110,53,.4)]  "
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
              />

              {/* include validation with required or other standard HTML validation rules */}
              <div className="flex gap-3 justify-center items-center md:flex-row flex-col">
                <input
                  className="w-full px-6 dark:bg-slate-200 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                  {...register("password", { required: true, minLength:6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
                  placeholder="Enter Password"
                  type="text"
                />

                <input
                  className="w-full px-6 dark:bg-slate-200 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                  {...register("confirm_password", { required: true })}
                  placeholder="Confirm Password"
                  type="text"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="flex gap-3 w-full items-center justify-center md:flex-row flex-col">
              <input
                className="md:w-1/2 px-6 dark:bg-slate-200 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                {...register("phone", { required: true })}
                placeholder="Enter Phone Number"
              />
              <select className="md:w-1/2 dark:bg-slate-200 w-full px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]" {...register("gender")}>
              <option value="">Select Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              </div>
              <input
                className="w-full px-6 mt-5 dark:bg-slate-200 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                {...register("photo", { required: true })}
                placeholder="Enter Photo Url"
              />
              
              <input
                className="w-full px-6 mt-5 dark:bg-slate-200 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                {...register("address", { required: true })}
                placeholder="Enter Address Info"
              />

            {errors.password && <span className="text-sm text-red-600 my-2">Password must have minimum 6 characters, one uppercase letter, one special character.</span>}


              <div className="parent-btn mt-6">
                <button
                  type="submit"
                  className={` ${authdark ? "darkbutton3" : "button3"}  text-black bg-[#ECF8F9]`}
                >
                  SignUp
                </button>
              </div>
            </form>
            <p className="text-black dark:text-slate-100 text-lg">
              Already have an accout? Please <Link className="text-green-700 font-bold" to="/login">
                Login
              </Link>
            </p>
            <div className="parent-btn mx-auto">
              <button onClick={handleGoogle} className={` ${authdark ? "darkbutton3" : "button3"}  flex items-center gap-3`}>
                <img className="h-6 w-6" alt="" src={google} /> Google Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
