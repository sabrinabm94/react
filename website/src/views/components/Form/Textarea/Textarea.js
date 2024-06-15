import React from "react";

const Textarea = (props) => {
    if (props.name) {
        //TODO: converter para pattern de composição
        return (
            <div className="form-group">
                <label htmlFor={props.name}>{props.name}</label>
                <textarea
                    className={props.className}
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder}
                    data-testid="textarea-component"
                ></textarea>
            </div>
        );
    } else {
        return (
            //TODO: converter para pattern de composição
            <div className="form-group">
                <textarea
                    className={props.className}
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder}
                    data-testid="textarea-component"
                ></textarea>
            </div>
        );
    }
};

export default Textarea;
