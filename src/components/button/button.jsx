import React from "react";
import "./styles.css";

const Button = (props) => {
    return (
        <button className="button-primary">{props.text}</button>
    )
}

export default Button; 