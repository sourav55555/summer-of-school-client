import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bannerimg from "../../assets/bg-images/pngegg (3).png";
import image from "../../assets/log/141.jpg";
import "./Signup.css";
import google from "../../assets/Google-Icon-PNG_rwscww.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="page-header h-[20rem]">
        <div className="pt-32 px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">Register</span>
          </p>
          <img className="w-[14em]" src={bannerimg} alt="" />
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="w-1/2">
          <img className="w-[35rem] mx-auto" src={image} alt="" />
        </div>
        <div className="w-1/2">
          <div className="logbg h-full w-full border-l-4 p-12 mx-auto flex items-center flex-col gap-5 justify-center ">
            <form
              className="flex flex-col w-3/5 mt-8 mx-auto items-center justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="w-full px-6 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]  "
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
              />

              {/* include validation with required or other standard HTML validation rules */}
              <div className="flex gap-3 justify-center items-center">
                <input
                  className="w-full px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                  {...register("password", { required: true })}
                  placeholder="Enter Password"
                />
                <input
                  className="w-full px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                  {...register("confirm_password", { required: true })}
                  placeholder="Confirm Password"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="flex gap-3 w-full items-center justify-center">
              <input
                className="w-1/2 px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                {...register("photo", { required: true })}
                placeholder="Enter Photo Url"
              />
              <select className="w-1/2 px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]" {...register("gender")}>
              <option value="">Select Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              </div>
              <input
                className="w-full px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                {...register("number", { required: true })}
                placeholder="Enter Phone Number"
              />
              <input
                className="w-full px-6 mt-5 py-3 placeholder:text-black bg-[rgba(142,110,53,.4)]"
                {...register("address", { required: true })}
                placeholder="Enter Address Info"
              />

              <div className="parent-btn mt-6">
                {/* <input className="button2" type="submit" value="Login" /> */}
                <button
                  type="submit"
                  className="button3 text-black bg-[#ECF8F9]"
                >
                  SignUp
                </button>
              </div>
            </form>
            <p className="text-black text-lg">
              Already have an accout? Please <Link className="text-green-700 font-bold" to="/login">
                Login
              </Link>
            </p>
            <div className="parent-btn mx-auto">
              <button className="button3 flex items-center gap-3">
                <img className="h-6 w-6" alt="" src={google} /> Google Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Signup;
