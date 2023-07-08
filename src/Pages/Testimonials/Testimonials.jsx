import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import img1 from '../../assets/newIcon/mom-daughter-hug-gettyimages-821062718-2000-280c5ab1985c40f0a89494e5f15b5bbb-054faca648c84b108022f826dc232550.webp';
import img2 from '../../assets/newIcon/Untitled.jpg';
import img3 from '../../assets/newIcon/Untitled.jyhhu.jpg';
import img4 from '../../assets/newIcon/Untitllkjked.jpg';
import imgN from '../../assets/newIcon/quotation.png';



const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className=" bg-[#fff5e4] dark:bg-[#061551] pt-24 pb-32 text-center px-3">
      <h2 className="font1 text-4xl font-bold mb-16 mx-auto">Some reflections from our members.</h2>
      <div>
        <div className="font2 h-fit md:h-[22rem] md:w-1/2 mx-auto bg-[#f6dfb8] dark:bg-[#7536ff] slide">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="md:h-[21rem] h-fit p-9 flex flex-col gap-5 justify-center items-center">
                    <div>
                        <img className=" h-16 rounded-full" src={img1} alt="" />
                    </div>
                    <p>
                    Attending the summer camp sports school was an incredible experience for my child. The coaches, John and Lisa, were knowledgeable, supportive, and created a positive and inclusive environment. My child, Ethan, came back more confident and motivated to continue pursuing their athletic goals. I highly recommend this summer camp sports school.
                    <span className="flex items-center justify-center gap-4 text-lg font-semibold mt-3">  Sarah P. 
                      <img className=" h-8" src={imgN} alt="" />
                    </span>
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="md:h-[21rem] p-9 flex flex-col gap-5 justify-center items-center">
                    <div>
                        <img className=" h-16 rounded-full" src={img2} alt="" />
                    </div>
                    <p>
                    I couldn't be happier with the experience my child, Olivia, had at the summer camp sports school. As a parent, safety was a top concern for me, and the camp exceeded my expectations. The organization and communication, led by Camp Director Mark, were excellent, and my child thoroughly enjoyed the diverse range of sports activities offered. I highly recommend this camp to any parent looking for a quality sports program.
                    <span className="flex items-center justify-center gap-4 text-lg font-semibold mt-3">Michelle T.<img className=" h-8" src={imgN} alt="" />
                    </span>
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="md:h-[21rem] p-9 flex flex-col gap-5 justify-center items-center">
                    <div>
                        <img className=" h-16 rounded-full" src={img3} alt="" />
                    </div>
                    <p>
                    Our family was impressed by the high-quality sports program offered at the summer camp sports school. Our children, Emma and Daniel, had a blast participating in a wide range of activities, from soccer to swimming to basketball. They not only focused on skill development but also emphasized teamwork, sportsmanship, and overall character building. Our kids can't wait to return next summer!
                    <span className="flex items-center justify-center gap-4 text-lg font-semibold mt-3">John D. <img className=" h-8" src={imgN} alt="" />
                    </span>
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="md:h-[21rem] p-9 flex flex-col gap-5 justify-center items-center">
                    <div>
                        <img className=" h-16 rounded-full" src={img4} alt="" />
                    </div>
                    <p>
                    The summer camp sports school provided my child, Michael, with a perfect balance of skill development and fun. The coaches, Coach Ryan and Coach Emily, were not only knowledgeable but also passionate about their respective sports, which made the learning experience engaging and enjoyable. The facilities were fantastic, and the camp offered a well-rounded experience for kids of all skill levels. We will definitely be returning next year!
                    <span className="flex items-center justify-center gap-4 text-lg font-semibold mt-3">David L. <img className=" h-8" src={imgN} alt="" />
                    </span>
                    </p>
                </div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
