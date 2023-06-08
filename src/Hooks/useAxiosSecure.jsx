import axios from "axios";

const useAxiosSecure = () => {

    const secureUrl = axios.create({
        baseURL : "http://localhost:5000/"
    })


    return [secureUrl];
};

export default useAxiosSecure;