
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import imagebg from '../../../assets/classbg/blob-haikei(4).png';

import useInstructors from "../../../Hooks/useInstructors";
import "./Instructorsbg.css"

const Instructors = () => {

    const [instructors] = useInstructors();
    console.log(instructors)

    return (
        <div className="min-h-screen text-center mt-36 ">
          <h2 className="font1 font-semibold mx-auto text-4xl mb-12">Our Top Instructors</h2>
          <div className="grid grid-cols-3 gap-12 w-4/5 mx-auto ">
          {
            instructors.slice(0,6).map(data => <div className="relative h-[16rem]" key={data._id}>
              
                <img className="h-full top-0 z-0 left-0 w-full absolute" src={imagebg} alt="" />
              
              <div className="flex h-full items-center justify-center">
                <img className="w-4/5 z-10 h-4/5 rounded-xl" src={data.photo} alt="" />
              </div>
            </div>)
          }
          </div>
        </div>
    );
};

export default Instructors;