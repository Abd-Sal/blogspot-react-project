import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider  = ({children}) => {
    const [authInfo, setAuthInfo] = useState({});
    const [isInitialized, setIsInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    
    const checkUserSigningIn = ()=>{
        try{
            let auth = localStorage.getItem('auth');
            if(auth){
                setAuthInfo(JSON.parse(auth))
                setIsInitialized(true)
            }
            else{
                setIsInitialized(false)
            }
        }catch(error){
            console.error('Auth check failed:', error);
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        checkUserSigningIn();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{authInfo, setAuthInfo, isInitialized, setIsInitialized}}>
            {children}
        </AuthContext.Provider>
    )
}
