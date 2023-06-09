import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {

    const [secureUrl] = useAxiosSecure();

    const {refetch, data : users = []} = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const res = await secureUrl("user");

            console.log(res.data, "users");
            return res.data;
        }
    })

    return [users, refetch];
};

export default useUser;