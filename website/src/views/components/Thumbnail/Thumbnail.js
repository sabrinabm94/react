import React, { useState } from "react";
import Text from "../Text/Text";
import Picture from "../Picture/Picture";

const Thumbnail = (props) => {
    const [text, setText] = useState("");

    const handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setText(data);
        }
    };

    let style = {
        backgroundImage: `url(${props.url})`,
    };

    return (
        <div className="thumbnail" data-testid="thumbnail-component">
            <Picture
                className="picture"
                alt={`Image of ${props.title}`}
                style={style}
            />
            <h2 className="title">
                <strong>{props.title}</strong>
            </h2>
            <Text
                className="subtitle"
                text={props.subtitle}
                parentCallback={handleBreaklines}
            />
        </div>
    );
};

export default Thumbnail;
