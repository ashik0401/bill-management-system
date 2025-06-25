import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase.config';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };


    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    };


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }


    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const userInfo = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUser,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
