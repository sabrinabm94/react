import React from "react";

const File = (props) => {
    //TODO: converter para pattern de composição
    return (
        <div className="form-group" data-testid="file-component">
            <label htmlFor={props.name}></label>
            <input
                type={props.type}
                name={props.name}
                accept={props.accept}
                id={props.id}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default File;
