import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext= createContext({});

const AuthProviders = ({children}) => {
    const [user, setUser]= useState("Munna");

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout= ()=>{
        return signOut(auth);
    }

    const userInfo={
        user,
        createUser,
        signInUser,
        logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;