import "./Home.css";
import img1 from "../../../assets/swiper/2-2-badminton-picture.png";
import img2 from "../../../assets/swiper/pngaaa.com-1377109.png";
import img3 from "../../../assets/swiper/pngfind.com-kids-playing-soccer-png-4000894.png";
import img4 from "../../../assets/swiper/pngwing.com (2).png";

import bgimg1 from "../../../assets/bg-images/22461-5-badminton-birdie-clipart.png";
import bgimg2 from "../../../assets/bg-images/pngaaa.com-1376990.png";
import bgimg3 from "../../../assets/bg-images/pngegg (3).png";
import bgimg4 from "../../../assets/bg-images/pngegg.png";
import bgimg5 from "../../../assets/bg-images/—Pngtree—vector free buckle cartoon basketball_4582800.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import TopClasses from "../TopClasses/TopClasses";
import Instructors from "../Instructors/Instructors";
import WhyRegister from "../WhyRegister/WhyRegister";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";


const Home = () => {

  const {authdark} = useAuth();
  console.log(authdark,"darks");

  return (
    <div className="dark:bg-[#061551] dark:text-white">
      <div className="banner bg-[url('https://i.ibb.co/t4Xt9Pv/liquid-cheese-svg.jpg')] 
      dark:bg-[url('https://i.ibb.co/mFCN8qT/liquid-cheese-new-1.png')] bg-no-repeat">
        <div className="min-h-screen maxWidth mx-auto relative pt-44 pb-32  flex items-center justify-between gap-8 md:flex-row flex-col-reverse">
          <div className="md:w-7/12 w-full md:px-0 px-6 relative z-20">
            <div className="md:w-3/4 ms-auto space-y-10">
              <h3 className="font1 text-7xl md:text-8xl dark:text-[#e5fcff] text-[#213555] font-bold">
                Best Summer <br />
                Camp
              </h3>
              <p className="font-semibold font2 text-3xl text-[rgb(255,255,255)]">
                Get Ready For Summer <br />
                With <span className="font-bold dark:text-[rgb(173,135,255)] text-[#38567c]">Sports.</span>
              </p>
              <div className="parent-btn">
                <Link to="/register" className={`${authdark ? "darkbutton2" : "button2" } `}> Register Now</Link>
              </div>
            </div>
          </div>

          {/* slider right section  */}
          <div className="md:w-5/12 w-full">
            <div className=" p-3 mx-auto md:me-auto w-5/6 md:w-3/4 text-center">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                }}
                loop
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="h-[33rem] mx-auto" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="h-[33rem] mx-auto" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="h-[33rem] mx-auto" src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="h-[33rem] mx-auto" src={img4} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* background images */}
          <div className="absolute md:block hidden w-fit bottom-[5%] right-[3%]">
            <img className="w-36" src={bgimg1} alt="" />
          </div>
          <div className="absolute md:block hidden w-fit top-[22%] left-[6%] z-0">
            <img className="w-40" src={bgimg2} alt="{bgimg1}" />
          </div>
         {/*  <div className="absolute w-fit bottom-[5%] left-[5%]">
            <img className="w-60" src={bgimg3} alt="{bgimg1}" />
          </div> */}
          <div className="absolute md:block hidden w-fit bottom-[15%] right-[44%]">
            <img className="w-60" src={bgimg4} alt="{bgimg1}" />
          </div>
        </div>
      </div>

      {/* top classes  */}
      <TopClasses/>

      {/* instructors  */}
      <Instructors/>

      {/* why resgister  */}
      <WhyRegister/>

    </div>
  );
};

export default Home;
