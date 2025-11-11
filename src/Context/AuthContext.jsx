import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider  = ({children}) => {
    const [authInfo, setAuthInfo] = useState({});
    const [isInitialized, setIsInitialized] = useState(false)

    const checkUserSigningIn = ()=>{
        let auth = localStorage.getItem('auth');
        if(auth){
            setAuthInfo(JSON.parse(auth))
            setIsInitialized(true)
        }
        else{
            setIsInitialized(false)
        }
    }

    useEffect(()=>{
        checkUserSigningIn();
    }, [])

    return (
        <AuthContext.Provider value={{authInfo, setAuthInfo, isInitialized, setIsInitialized}}>
            {children}
        </AuthContext.Provider>
    )
}
