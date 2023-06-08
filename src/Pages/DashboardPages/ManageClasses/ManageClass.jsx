import useAdmin from "../../../Hooks/useAdmin";

const ManageClass = () => {

    const [isAdmin, isLoading] = useAdmin();
    console.log(isAdmin,isLoading, "form dasheasdjf")

    return (
        <div>
            <p>This is manage class</p>
        </div>
    );
};

export default ManageClass;