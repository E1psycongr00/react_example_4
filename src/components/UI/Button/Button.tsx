import React from 'react'

import styled from "./Button.module.css";

interface ButtonProps {
    type?: "submit" | "reset";
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children?: React.ReactNode;
}


const Button = (props:ButtonProps) => {
  return (
    <button type={props.type || "button"}
    className={`${styled.button} ${props.className}`}
    onClick={props.onClick}
    disabled={props.disabled}>
        {props.children}
    </button>
  );
};


export default Button