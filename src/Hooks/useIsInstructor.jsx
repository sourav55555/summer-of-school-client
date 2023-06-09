import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useIsInstructor = () => {
    const {user, loading} = useAuth();
    const [secureUrl] = useAxiosSecure();

    const {data: isInstructor = false, isLoading } = useQuery({
        queryKey: ["isInstructor", user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const response = await secureUrl(`roleuser/${user?.email}`);
            console.log(response.data, "is isInstructor");
            return response.data.instructor;
        }
    })

    return [isInstructor, isLoading];
};

export default useIsInstructor;