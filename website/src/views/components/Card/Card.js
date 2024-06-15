import React, { useState } from "react";

//components
import Glyphicon from "../Glyphicon/Glyphicon";
import Text from "../Text/Text";

const Card = (props) => {
    const [text, setText] = useState("");

    const handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setText(data);
        }
    };

    return (
        <div className="card" data-testid="card-component">
            <Glyphicon name={props.iconName} />
            <h2 className="title">{props.title}</h2>
            <Text className="subtitle" text={props.subtitle} parentCallback={handleBreaklines} />
        </div>
    );
};

export default Card;
