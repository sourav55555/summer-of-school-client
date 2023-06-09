import bannerimg from '../../assets/bg-images/pngaaa.com-1376990.png';
import useClasses from '../../Hooks/useClasses';
import SingleClass from './SingleClass';

const Classes = () => {

    const [classes, refetch] = useClasses();

    console.log(classes, "cls")

    let approvedClasses = classes.filter(data => data.status === "approved");

    console.log(approvedClasses, "approve xdfd");

  return (
    <div>
      <div className="page-header h-[20rem]">
        <div className="pt-32 px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">Classes</span>
          </p>
          <img className="w-[10.6rem]" src={bannerimg} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 mt-32 w-3/4 mx-auto'>
            {
                approvedClasses.map(data => <SingleClass key={data._id} data={data}/>)
            }
      </div>
    </div>
  );
};

export default Classes;