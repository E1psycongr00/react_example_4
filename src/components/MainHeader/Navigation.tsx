import React from 'react'
import styled from "./Navigation.module.css";

interface NavigationProps {
    isLoggedIn?: boolean;
    onLogout?: React.MouseEventHandler<HTMLButtonElement>;
}


const Navigation = (props:NavigationProps) => {
  return (
      <nav className={styled.nav}>
          <ul>
              {props.isLoggedIn && (
                  <li>
                      <a href="/">Users</a>
                  </li>
              )}
              {props.isLoggedIn && (
                  <li>
                      <a href="/">Admin</a>
                  </li>
              )}
              {props.isLoggedIn && (
                  <li>
                      <button onClick={props.onLogout}>Logout</button>
                  </li>
              )}
          </ul>
      </nav>
  );
}


export default Navigation