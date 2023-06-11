import google from "../../assets/Google-Icon-PNG_rwscww.png";
import { useForm } from "react-hook-form";
import image from "../../assets/10.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
import bannerimg from '../../assets/bg-images/pngegg (3).png';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

  const {login, googleLog, authdark} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
    .then(()=>{
      toast.success('Login Successful')
    })
    .catch(error => toast.error(`${error.message}`))
  };

  const [show, setShow] = useState("password");

  const handlePass = () => {
    if(show == "password"){
      setShow("text");
    }else{
      setShow("password")
    }
  }

  const handleGoogle = ()=>{
    googleLog()
    .then(()=> toast.success('Login Successful'))
  }

  return (
    <div className='dark:bg-[#061551] dark:text-white pb-28'>
      <div className={` ${authdark ? "dark-page-header" : "page-header"} h-[17rem] md:h-[20rem]`}>
        <div className="md:pt-32 pt-36 px-6 md:px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">Home / <span className="text-5xl font-semibold text-white">Login</span></p>
          <img className="w-[14em] md:block hidden" src={bannerimg} alt="" />
        </div>
      </div>
      <div className="flex pt-32 md:flex-row flex-col justify-center items-center md:mt-0 px-6 mt-20">
        <div className="md:w-1/2">
          <img className="w-[35rem] mx-auto rounded-3xl" src={image} alt="" />
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-10">
          <div className="logbg bg-[url('https://i.ibb.co/T8bFR7V/blob-haikei-7.png')] 
          dark:bg-[url('https://i.ibb.co/2KVBr9X/blob-haikei-8.png')] h-[32rem] md:w-3/5 mx-auto flex items-center flex-col gap-5 justify-center ">
            <form
              className="flex flex-col w-3/4 mt-8 mx-auto items-center justify-center dark:text-black"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="w-full px-6 py-3 placeholder:text-black"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
              />

              {/* include validation with required or other standard HTML validation rules */}
              <div className="w-full relative">
              <input
                className="w-full px-6 mt-5 py-3 placeholder:text-black"
                {...register( "password" , { required: true })}
                type={show}
                placeholder="Enter Password"
              />
              <label onClick={handlePass} className="ms-auto absolute cursor-pointer right-4 top-8 ">
                <FontAwesomeIcon className="w-5 h-5" icon={faEye}/>
              </label>
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <p className="text-red-300 w-full text-start mt-2 mb-6">
                Forgot Password?
              </p>

              <div className="parent-btn">
                {/* <input className="button2" type="submit" value="Login" /> */}
                <button
                  type="submit"
                  className="button3 text-black bg-[#ECF8F9]"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-white text-lg">
              Don't have an accout? Please{" "}
              <Link className="text-green-300 font-bold" to="/register">
                SignUp
              </Link>
            </p>
            <div className="parent-btn mx-auto">
              <button onClick={handleGoogle} className="button3 flex items-center gap-3">
                <img className="h-6 w-6" src={google} alt="" /> Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
