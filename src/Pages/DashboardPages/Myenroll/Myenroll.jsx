import useClasses from "../../../Hooks/useClasses";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import Select from "./Select";


const Myenroll = () => {
    const [enrolled, selected] = useSelectedClass();
    console.log(enrolled, "enro");
    console.log(selected, "sele")

    const [classes] = useClasses();

    const allSelect = [];

    enrolled.map(select => {
        allSelect.push(classes.find(data => data.name === select.classname))
    })
    console.log(allSelect, "get all select");

    return (
        <div className="pt-16">
            <h3 className="text-4xl font-semibold font1">My Enrolled Classes</h3>


            <div className="grid grid-cols-2 gap-6">
                {
                    allSelect.map(data => <Select key={data._id} data={data}/>)
                }
            </div>
        </div>
    )
};

export default Myenroll;