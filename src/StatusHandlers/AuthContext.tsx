import React, { createContext, ReactNode } from 'react';
import { useLocalStorage } from 'usehooks-ts'


interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>('isLoggedIn', false);
    const [, setToken] = useLocalStorage<string>('token', '');
    const [, setUserData] = useLocalStorage<object>('user', {})


    const login = () => setIsLoggedIn(true);
    const logout = () => { setUserData({}); setToken('') };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};