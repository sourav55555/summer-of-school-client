import bannerimg from '../../assets/bg-images/pngaaa.com-1376990.png';
import useAuth from '../../Hooks/useAuth';
import useClasses from '../../Hooks/useClasses';
import SingleClass from './SingleClass';

const Classes = () => {

    const [classes, refetch] = useClasses();

    const {authdark} = useAuth();

    console.log(classes, "cls")

    let approvedClasses = classes.filter(data => data.status === "approved");

    console.log(approvedClasses, "approve xdfd");


  return (
    <div className='dark:bg-[#061551] dark:text-white'>
      <div className={` ${authdark ? "dark-page-header" : "page-header"} h-[17rem] md:h-[20rem]`}>
        <div className="md:pt-32 pt-36 px-6 md:px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">Classes</span>
          </p>
          <img className="w-[10.6rem] md:block hidden" src={bannerimg} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-8 py-32 w-3/4 mx-auto'>
            {
                approvedClasses.map(data => <SingleClass key={data._id} data={data}/>)
            }
      </div>
    </div>
  );
};

export default Classes;
