import { useForm } from "react-hook-form";
import image from "../../assets/10.jpg";
import "./Login.css"

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-1/2">
        <img className="w-[35rem] mx-auto" src={image} alt="" />
      </div>
      <div className="w-1/2">
        <div className="logbg h-[30rem] w-3/5">
          <form className="flex flex-col w-[] " onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("email", { required: true })} placeholder="Enter Your Email"/>

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("password", { required: true })} placeholder="Enter Password"/>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="parent-btn">
                {/* <input className="button2" type="submit" value="Login" /> */}
                <button className="button2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
