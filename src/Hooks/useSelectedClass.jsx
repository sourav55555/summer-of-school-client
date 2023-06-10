import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClass = () => {

    const {user} = useAuth();
    const [secureUrl] = useAxiosSecure();

    const {data: selectClass = [], refetch} = useQuery({
        queryKey: ["selectClass", user.email],
        queryFn: async ()=>{
            const res = await secureUrl.get(`/select/${user.email}`);
            return res.data;
        }
    })

    const result = selectClass.reduce((acc, item) => {
        if (item.status == "enrolled") {
          acc.enrolled.push(item);
        } else {
          acc.selected.push(item);
        }
        return acc;
      }, { enrolled: [], selected: [] });

      const enrolled = result.enrolled;
      const selected = result.selected;

    return [enrolled, selected, refetch ];
};

export default useSelectedClass;