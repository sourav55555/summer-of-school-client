import axios from "axios";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const secureUrl = axios.create({
  baseURL : "http://localhost:5000/"
})

const useAxiosSecure = () => {

    // const navigate = useNavigate();

    // const {logout} = useAuth();

    

    useEffect(() => {
        secureUrl.interceptors.request.use((config) => {
          const token = localStorage.getItem('token');
          console.log(token,"auth token");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        });
    
        secureUrl.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              // await logout();
              // navigate('/login');
              console.log("unauthorixed", "axios cequre")

            }
            return Promise.reject(error);
          }
        );
      }, []);


    return [secureUrl];
};

export default useAxiosSecure;