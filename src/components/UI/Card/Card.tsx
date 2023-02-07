import React from "react";
import styled from "./Card.module.css";

interface CardProps {
    className?: string;
    children?: React.ReactNode;
}

const Card = (props: CardProps) => {
    return (
        <div className={`${styled.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;
