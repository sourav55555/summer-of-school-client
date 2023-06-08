import useAdmin from "../../../Hooks/useAdmin";
import useClasses from "../../../Hooks/useClasses";
import Class from "./Class";

const ManageClass = () => {

    const [isAdmin, isLoading] = useAdmin();
    console.log(isAdmin,isLoading, "form dasheasdjf");

    const [classes, refetch] = useClasses();


    return (
        <div className="pt-16">
            <h3 className="text-4xl font-semibold font1">All Classes</h3>
            <div>
                {
                    classes.map(data => <Class key={data._id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default ManageClass;