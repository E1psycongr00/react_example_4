import React, { useState } from "react";

const AuthContext = React.createContext<{
    isLoggedIn: boolean;
    onLogout: React.MouseEventHandler;
    onLogin: (e1: string, e2: string) => void;
}>({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        setIsLoggedIn(true);
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
