import { motion, useTime, useTransform } from "framer-motion";
import useClasses from "../../../Hooks/useClasses";
import Class from "./Class";
import "./top.css"


const TopClasses = () => {


  const [classes] = useClasses();

    const time = useTime();
    const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });


  return (
    <div className=" maxWidth mx-auto parallel relative overflow-x-hidden flex py-32 gap-20 justify-between items-center px-12">
      <div className="h-full w-full bg-[rgba(0,0,0,.5)] absolute top-0 right-0 z-0" ></div>
      <div className="relative w-[12rem] h-[12rem] ms-auto z-10">
        <motion.div className="w-[12rem] h-[12rem] rounded-[2rem] dark:bg-[#0d2791] bg-[#8e6e35]" style={{ rotate }} />
        <h1 className="absolute w-fit font1 text-2xl font-semibold text-white top-1/2 left-1/2 top">Our Top <br /> Classes</h1>
        
      </div>
      <div className="grid grid-cols-3 gap-6 w-4/5 z-10">
      {
          classes.slice(0,6).map((data, index) => <Class key={data._id} index={index} data={data}/> )
        }
      </div>
    </div>
  );
};

export default TopClasses;
