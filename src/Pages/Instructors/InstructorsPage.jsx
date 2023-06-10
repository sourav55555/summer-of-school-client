import bannerimg from "../../assets/bg-images/pngaaa.com-1376990.png";
import useAuth from "../../Hooks/useAuth";
import useInstructors from "../../Hooks/useInstructors";
import SInstructor from "./sInstructor";

const InstructorsPage = () => {
  const [instructors] = useInstructors();

  const {authdark} = useAuth();

  return (
    <div className='dark:bg-[#061551] dark:text-white'>
      <div className={` ${authdark ? "dark-page-header" : "page-header"} h-[17rem] md:h-[20rem]`}>
        <div className="md:pt-32 pt-36 px-6 md:px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">
              Instructors
            </span>
          </p>
          <img className="w-[10.6rem] md:block hidden" src={bannerimg} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:w-3/4 mx-auto md:px-0 px-6 py-32">
        {
            instructors.map(data => <SInstructor key={data._id} data={data} />)
        }

      </div>
    </div>
  );
};

export default InstructorsPage;
