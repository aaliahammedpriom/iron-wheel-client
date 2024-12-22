import React, { useEffect, useState } from 'react';
import AuthContext from './Provider';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const signInUser = (email,password)=>{
        return 
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        registerUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;