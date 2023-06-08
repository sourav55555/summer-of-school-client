import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {

    const [secureUrl] = useAxiosSecure();

    const { data : classes = [] , refetch } = useQuery({
        queryKey: ["users"],
        queryFn : async () => {
            const res = await secureUrl("/classes");
            return res.data
        }
    })

    return [classes, refetch];
};

export default useClasses;