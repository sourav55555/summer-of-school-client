import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./top.css"

const Class = ({index, data}) => {
    console.log({index, data})
    const {image, name, students} = data;
    return (
        <div className=" h-[20rem] bgclass bg-no-repeat flex flex-col justify-between py-8 items-center font2">
            <div className="h-[77%] flex items-baseline">
                <img className="w-[14.5rem] m-auto max-h-full" src={image} alt="" />
            </div>
            <div className="h-[23%]">
            <p className="font-semibold text-2xl">Class: {name}</p>
            <p className="font-semibold mt-2"><FontAwesomeIcon className="me-2" icon={faUsers} />
                    Students: {students}
            </p>
            </div>
        </div>
    );
};

export default Class;