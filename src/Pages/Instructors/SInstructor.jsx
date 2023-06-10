
import "./instructor.css";

const SInstructor = ({data}) => {
    const {name, photo, email } = data;
    return (
        <div className="md:w-[21rem] w-full cardIns">
            <div className="w-full">
                <div className="h-fit p-4 mx-auto relative imgbg rounded-full z-10 dark:bg-[#061551] bg-base-100 -mb-[3.4rem] w-3/5 ">
                <img className="max-h-[9rem] rounded-full  insImage" src={photo} alt="" />
                </div>
            </div>
            <div className="px-6 pt-[4.5rem] text-gray-200 pb-6 border-2 z-0 bg-[#8e6e35]  dark:bg-[rgb(133,77,255)]  rounded-2xl font2">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-lg font-semibold">{email}</p>
                <button className="bg-[#edce99] text-black text-base px-3 py-2 rounded-xl mt-3">See Classes</button>
            </div>
            
        </div>
    );
};

export default SInstructor;