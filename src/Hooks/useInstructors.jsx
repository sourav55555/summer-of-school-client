import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {

    const [secureUrl] = useAxiosSecure();

    const { data: instructors = [], refetch} = useQuery({
        queryKey: ["instructors"],
        queryFn: async ()=>{
            const res = await secureUrl("/instructors");

            console.log(res.data);
            return res.data;
        }
    })

    return [instructors, refetch];
};

export default useInstructors;