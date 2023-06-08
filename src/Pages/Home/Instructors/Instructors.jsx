import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import useInstructors from "../../../Hooks/useInstructors";

const Instructors = () => {

    const [instructors] = useInstructors();
    console.log(instructors)

    return (
        <div className="min-h-screen mt-32">
              <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {
        instructors.slice(0,6).map(data =>  <SwiperSlide className="w-[30rem]" key={data._id}><img className="w-[30rem]" src={data.photo} alt="" /></SwiperSlide>)
      }
      </Swiper>
        </div>
    );
};

export default Instructors;