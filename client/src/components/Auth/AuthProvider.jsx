import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAutenticated: true,
});

export function AuthProvider({ children }) {

    const [isAutenticated, setIsAutenticated] = useState(true);
    
    return (

        <AuthContext.Provider value={isAutenticated} >
            
            {children}

        </AuthContext.Provider>
        
    )

}

export const useAuth = () => useContext(AuthContext);