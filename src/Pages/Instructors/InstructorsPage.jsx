import bannerimg from "../../assets/bg-images/pngaaa.com-1376990.png";
import useAuth from "../../Hooks/useAuth";
import useInstructors from "../../Hooks/useInstructors";
import SInstructor from "./sInstructor";

const InstructorsPage = () => {
  const [instructors] = useInstructors();

  const {authdark} = useAuth();

  return (
    <div className='dark:bg-[#061551] dark:text-white'>
      <div className={` ${authdark ? "dark-page-header" : "page-header"} h-[20rem]`}>
        <div className="pt-32 px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">
              Instructors
            </span>
          </p>
          <img className="w-[10.6rem]" src={bannerimg} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12 w-3/4 mx-auto py-32">
        {
            instructors.map(data => <SInstructor key={data._id} data={data} />)
        }

      </div>
    </div>
  );
};

export default InstructorsPage;
