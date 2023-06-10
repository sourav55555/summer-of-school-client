import { useQuery } from "@tanstack/react-query";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import Select from "./Select";


const Myselect = () => {

    const [secureUrl] = useAxiosSecure();

    const {user} = useAuth();
    const [classes] = useClasses();

    /* const {data: selectClass = [], refetch} = useQuery({
        queryKey: ["selectClass", user.email],
        queryFn: async ()=>{
            const res = await secureUrl.get(`/select/${user.email}`);
            return res.data;
        }
    }) */
    const [enrolled, selected, refetch] = useSelectedClass();
    console.log( selected,"sele")

    const allSelect = [];

    selected.map(select => {
        allSelect.push(classes.find(data => data.name === select.classname))
    })
    console.log(allSelect, "get all select");


    const handleDelete = (classname) =>{
        console.log(classname);
        secureUrl.delete(`/select?email=${user.email}&&classname=${classname}`)
        .then(() => {toast("Class Deleted"); refetch()})

    }

    return (
        <div className="pt-16">
            <h3 className="text-4xl font-semibold font1">My Selected Classes</h3>


            <div className="grid grid-cols-2 gap-6">
                {
                    allSelect.map(data => <Select key={data._id} data={data} handleDelete={handleDelete}/>)
                }
            </div>
            <Toaster/>
        </div>
    );
};

export default Myselect;