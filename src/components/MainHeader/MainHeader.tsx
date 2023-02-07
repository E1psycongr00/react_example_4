import React, { MouseEventHandler } from "react";
import styled from "./MainHeader.module.css";
import Navigation from "./Navigation";

interface MainHeaderProps {
    isAuthenticated?: boolean;
    onLogout?: MouseEventHandler<HTMLButtonElement>;
}

const MainHeader = (props: MainHeaderProps) => {
    return (
        <header className={styled["main-header"]}>
            <h1>A Typical Page</h1>
            <Navigation
                isLoggedIn={props.isAuthenticated}
                onLogout={props.onLogout}
            />
        </header>
    );
};

export default MainHeader;
