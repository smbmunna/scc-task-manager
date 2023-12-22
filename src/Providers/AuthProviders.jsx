import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext= createContext({});
const googleProvider= new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);


    //current user change observer 
    useEffect(()=>{
        const unsubscirbe =  onAuthStateChanged(auth, currentUser=>{          
              
            setUser(currentUser);
            const userEmail= currentUser?.email || user?.email;
            const loggedInUser= {email: userEmail};
            setLoading(false);
            if(currentUser){                
                const loggedInUser= {email: currentUser?.email};                
                setLoading(false);
                console.log(currentUser);
                
           }
        })
        return ()=>{
            unsubscirbe();
        };
    },[])
    

    const createUser= (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser= (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout= ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userInfo={
        user,
        createUser,
        signInUser,
        logout,
        googleLogin
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;