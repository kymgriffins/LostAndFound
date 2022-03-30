import {createContext, useState, useEffect,useContext} from 'react';
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
}from 'firebase/auth';
import {auth} from '../components/Firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] =useState({});

        function signUp(email, password){
            return createUserWithEmailAndPassword(auth,email, password);
        }
        function logIn(email, password){
            return signInWithEmailAndPassword(auth,email, password);
        }
        useEffect(() => {
            const unsubscribe=onAuthStateChanged(auth,(currentUser)=> {
                setUser(currentUser);
            });
                return () => {
                    unsubscribe();
                  
                };
            }, []);
    return (
    <userAuthContextProvider value={{signUp,logIn,user,signOut}}>
        {children}
        </userAuthContextProvider>
    );
  
}


 export function useUserAuth (){
    return useContext(userAuthContext);
 }
export default userAuthContext