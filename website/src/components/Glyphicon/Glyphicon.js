import React from "react";

const Glyphicon = (props) => {
    return (
        <span
            className={`glyphicon glyphicon-${props.name}`}
            data-testid="glyphicon-component"
        ></span>
    );
};
export default Glyphicon;
