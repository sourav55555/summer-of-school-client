import { createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import axios from "axios";



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLog = ()=>{
        setLoading(true);
        googleProvider.addScope('email');
        googleProvider.addScope('profile');
        return signInWithPopup(auth, googleProvider)
    }

    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            
            // set token 
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data =>{
                    localStorage.setItem('token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('token')
            }
            console.log(currentUser.providerData[0]?.email)
            console.log(currentUser)
            
        })
        return ()=> unsubscribe();
    }, [])

    const authFunctions = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleLog
    }

    return (
        <AuthContext.Provider value={authFunctions}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;