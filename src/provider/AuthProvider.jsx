import React, { useEffect, useState } from 'react';
import AuthContext from './Provider';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        setLoading(true)
    }
    const updateUserProfileOnReg =(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
          setLoading(true)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post(`http://localhost:3000/jwt`, user,{withCredentials:true})
                    .then(res => {
                        console.log(res.data)
                        setLoading(false)

                    })
            }
            // console.log(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfileOnReg,
        toggle,
        setToggle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;