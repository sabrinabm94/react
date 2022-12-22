import React from "react";

const Button = (props) => {
    if (!props.disabled || props.disabled === false) {
        return (
            <button
                className={`button btn ${props.className}`}
                id={props.id}
                type={props.type}
                data-toggle={props.dataToggle}
                data-target={props.dataTarget}
                onClick={props.onClick}
                required={props.required}
                data-testid="button-component"
            >
                {props.text}
                {props.children}
            </button>
        );
    } else {
        return (
            <button
                className={`button btn ${props.className}`}
                id={props.id}
                disabled
                type={props.type}
                data-toggle={props.dataToggle}
                data-target={props.dataTarget}
                onClick={props.onClick}
                data-testid="button-component"
            >
                {props.text}
                {props.children}
            </button>
        );
    }
};
export default Button;
