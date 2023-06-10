import img1 from "../../../assets/extra/team(1).png";
import img2 from "../../../assets/extra/classroom.png";
import img3 from "../../../assets/extra/settings.png";
import img4 from "../../../assets/extra/success.png";
import img5 from "../../../assets/extra/sport.png";
import img6 from "../../../assets/extra/camping.png";

import middleimg from "../../../assets/bg-images/—Pngtree—vector free buckle cartoon basketball_4582800.png";
import { motion, useAnimation, useTime, useTransform } from "framer-motion";
import { useEffect } from "react";

const WhyRegister = () => {
  const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

    const controls = useAnimation();

    const jumpAnimation = {
        y: [0, -100, 0], // Jumping animation along the y-axis
        transition: {
          duration: 1, // Duration of each jump
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: 'loop', // Loop the animation
          ease: 'easeInOut', // Easing function for smooth animation
        },
      };

  
      useEffect(() => {
        controls.start(jumpAnimation); // Start the animation
      }, [controls]);

  return (
    <div className=" text-center pt-36 pb-32">
      <h3 className="font1 text-4xl font-bold mb-20">
        This is why you should register.
      </h3>
      <div className="flex justify-center gap-8 items-center w-4/5 mx-auto text-start">
        <div className="w-[34%] font2 space-y-12">
          <div className="flex gap-3 items-center ">
            <div className=" w-[20%] flex items-center justify-center ">
              <div className="w-16 h-16 bg-[#f3d5a1] rounded-full flex items-center justify-center">
                <img className="w-12" src={img1} alt="" />
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl mb-1 font-bold">Diverse Sports Programs</p>
              <p className="dark:text-slate-300 text-slate-700">
                Wide range of sports activities and programs{" "}
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center ">
            <div className=" w-[20%] flex items-center justify-center ">
              <div className="w-16 h-16 bg-[#f3d5a1] rounded-full flex items-center justify-center">
                <img className="w-12" src={img2} alt="" />
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl mb-1 font-bold">
                Professional Coaching Staff
              </p>
              <p className="dark:text-slate-300 text-slate-700">
                {" "}
                We employ experienced and qualified coaches who specialize in
                specific sports
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center ">
            <div className=" w-[20%] flex items-center justify-center ">
              <div className="w-16 h-16 bg-[#f3d5a1] rounded-full flex items-center justify-center">
                <img className="w-12" src={img3} alt="" />
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl mb-1 font-bold">Skill Development</p>
              <p className="dark:text-slate-300 text-slate-700">
                Focus on skill development and provide structured training
                sessions
              </p>
            </div>
          </div>
        </div>
        <div className="w-[32%]">
          <motion.div
            animate={controls}
            style={{ rotate }}
            className="w-full p-[4.5rem]"
          >
            <img className="w-full" src={middleimg} alt="" />
          </motion.div>
        </div>
        <div className="w-[34%] font2 space-y-12">
          <div className="flex gap-3 items-center ">
            <div className=" w-[20%] flex items-center justify-center ">
              <div className="w-16 h-16 bg-[#f3d5a1] rounded-full flex items-center justify-center">
                <img className="w-12" src={img4} alt="" />
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl mb-1 font-bold">
                Team Building and Competition
              </p>
              <p className="dark:text-slate-300 text-slate-700">
                We organize friendly competitions and scrimmages
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center ">
            <div className=" w-[20%] flex items-center justify-center ">
              <div className="w-16 h-16 bg-[#f3d5a1] rounded-full flex items-center justify-center">
                <img className="w-12" src={img5} alt="" />
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl mb-1 font-bold">Facilities and Equipment</p>
              <p className="dark:text-slate-300 text-slate-700">
                We have well-maintained sports facilities and equipment
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center ">
            <div className=" w-[20%] flex items-center justify-center ">
              <div className="w-16 h-16 bg-[#f3d5a1] rounded-full flex items-center justify-center">
                <img className="w-12" src={img6} alt="" />
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl mb-1 font-bold">Recreational Activities</p>
              <p className="dark:text-slate-300 text-slate-700">
                Various recreational activities to provide a well-rounded
                experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRegister;
