import React, {useContext} from "react";
import AuthContext from "../store/auth-context";
import styled from "./Navigation.module.css";

const Navigation = () => {
    const ctx = useContext(AuthContext);
    return (
        <nav className={styled.nav}>
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
