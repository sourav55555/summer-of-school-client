import useUser from "../../../Hooks/useUser";
import User from "./User";


const ManageUsers = () => {

    const [users, refetch] = useUser();


    

    return (
        <div className="pt-16">
        <h3 className="text-4xl font-semibold font1">All Users</h3>
        <div className="">
            {
                users.map(data => <User key={data._id} data={data}/>)
            }
        </div>
    </div>
    );
};

export default ManageUsers;