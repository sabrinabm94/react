import React from "react";

const Input = (props) => {
    if (props.name) {
        //TODO: converter para pattern de composição
        return (
            <div className="form-group">
                <label htmlFor={props.name}>{props.name}</label>
                <input
                    type={props.type}
                    className={props.className}
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder}
                    required={props.required}
                    data-testid="input-component"
                />
            </div>
        );
    } else {
        return (
            <div className="form-group">
                <input
                    type={props.type}
                    className={props.className}
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder}
                    required={props.required}
                    data-testid="input-component"
                />
            </div>
        );
    }
};

export default Input;
