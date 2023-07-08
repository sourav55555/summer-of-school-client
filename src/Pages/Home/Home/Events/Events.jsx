import { Link } from "react-router-dom";
import img1 from "../../../../assets/event/22325-1-sport-photo.png";
import img2 from "../../../../assets/event/52-524714_sports-icons-all-sport-icon-png.png";
import img3 from "../../../../assets/event/SeekPng.com_sports-icon-png_4589029.png";
import useAuth from "../../../../Hooks/useAuth";

const Events = () => {
  const { authdark } = useAuth();

  return (
    <div className=" md:w-[1350px] mx-auto py-32 px-4">
      <div className="text-center mb-16 block md:hidden">
        <h2 className="font1 text-4xl font-bold mb-8 mx-auto">
          Our Special <span className="block">Events</span>
        </h2>
        <div className="parent-btn">
          <button className={`${authdark ? "darkbutton2" : "button2"} `}>
            View All
          </button>
        </div>
      </div>
      <div className=" mx-auto flex md:flex-row flex-col gap-12">
        <div className="md:w-1/3">
          <div className="bg-[#ffecca] dark:bg-[#9361ff] rounded-3xl pb-5">
            <h2 className="font-semibold text-lg py-3 dark:bg-[#7536ff] bg-[#8e6e35] text-white px-4 rounded-2xl">
              July 15th - July 20th
            </h2>
            <div className="px-4 gap-4 flex justify-center items-center">
              <img src={img1} className="w-28" alt="" />
              <div>
                <p className="font-semibold mb-2 mt-4">Sports Olympics</p>
                <p>
                  Friendly competition and sportsmanship through relay races,
                  mini-tournaments, and obstacle courses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 text-center">
          <div className="md:block hidden">
            <h2 className="font1 text-4xl font-bold mb-8 mx-auto">
              Our Special <span className="block">Events</span>
            </h2>
            <div className="parent-btn">
              <button className={`${authdark ? "darkbutton2" : "button2"} `}>
                View All
              </button>
            </div>
          </div>
          <div className="bg-[#ffecca] dark:bg-[#9361ff] rounded-3xl pb-5 md:mt-16 text-left">
            <h2 className="font-semibold text-lg py-3 dark:bg-[#7536ff] bg-[#8e6e35] text-white px-4 rounded-2xl">
              August 5th - August 9th
            </h2>
            <div className="px-4 gap-4 flex justify-center items-center">
              <img src={img2} className="w-24" alt="" />
              <div>
                <p className="font-semibold mb-2 mt-4">Skills Showcase</p>
                <p>
                  Campers display their talents in various sports, boosting
                  confidence and celebrating their progress.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 ">
          <div className="bg-[#ffecca] dark:bg-[#9361ff] rounded-3xl pb-5">
            <h2 className="font-semibold text-lg py-3 dark:bg-[#7536ff] bg-[#8e6e35] text-white px-4 rounded-2xl">
              August 20th - August 25th
            </h2>
            <div className="px-4 gap-4 flex justify-center items-center">
              <img src={img3} className="w-24" alt="" />
              <div>
                <p className="font-semibold mb-2 mt-4">
                  Sports Camp Championship
                </p>
                <p>
                  Athletes compete for the championship title in a thrilling
                  showcase of skill and strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
