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

const Home = () => {
  return (
    <div>
      <div className="min-h-screen relative pt-44 pb-32 bg-no-repeat flex items-center justify-between gap-8 banner">
        <div className="w-7/12 relative z-30">
          <div className="w-3/4 ms-auto space-y-10">
            <h3 className="font1 text-8xl text-[#213555] font-bold">Best Summer Camp</h3>
            <p className="font-semibold font2 text-3xl text-[rgb(64,64,64)]">Get Ready For Summer <br/>With <span className="font-bold text-[#38567c]">Sports.</span></p>
            <div className="parent-btn">
                <button className="button2"> Register Now</button>
            </div>
          </div>
        </div>
        
        {/* slider right section  */}
        <div className="w-5/12">

          <div className=" p-3 me-auto w-3/4 text-center">
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
        <div className="absolute w-fit bottom-10 right-4" ><img className="w-36" src={bgimg1} alt="" /></div>
        <div className="absolute w-fit top-36 left-[7rem] z-0"><img className="w-44" src={bgimg2} alt="{bgimg1}" /></div>
        <div className="absolute w-fit bottom-4 left-[5rem]"><img className="w-60" src={bgimg3} alt="{bgimg1}" /></div>
        <div className="absolute w-fit bottom-[7rem] right-[44%]"><img className="w-60" src={bgimg4} alt="{bgimg1}" /></div>
      </div>
    </div>
  );
};

export default Home;
