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
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfileOnReg = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    const signOutUser = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log(currentUser)
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post(`http://localhost:3000/jwt`, user, { withCredentials: true })
                    .then(res => {
                        // console.log("login", res.data)

                        setLoading(false)

                    })
            }
            else {
                axios.post(`http://localhost:3000/logout`, {}, { withCredentials: true })
                    .then(res => {
                        console.log("logout", res.data)
                        setLoading(false)

                    })
            }
            // console.log(currentUser)
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