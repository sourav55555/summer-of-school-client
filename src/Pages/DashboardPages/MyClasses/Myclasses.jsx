import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Myclass from "./Myclass";


const Myclasses = () => {

    const {user} = useAuth();

    const [secureUrl] = useAxiosSecure();

    const {data: myclass = [], refetch} = useQuery({
        queryKey: ["mycalss"],
        queryFn: async ()=>{
            const res = await secureUrl(`/myclass/${user.email}`)
            return res.data;
        }
    })
    
    return (
        <div className="pt-16">
            <h3 className="text-4xl font-semibold font1">All Classes</h3>
            <div>
                {
                    myclass.map(data => <Myclass key={data._id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default Myclasses;