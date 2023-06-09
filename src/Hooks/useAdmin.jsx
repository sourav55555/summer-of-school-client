
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {

    const {user, loading} = useAuth();
    const [secureUrl] = useAxiosSecure();

    const {data: isAdmin = false, isLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await secureUrl(`roleuser/${user?.email}`);
            console.log(response.data, "is admin");
            return response.data.admin
        }
    })

    return [isAdmin, isLoading];
};

export default useAdmin;