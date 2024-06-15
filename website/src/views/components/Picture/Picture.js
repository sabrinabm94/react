import React from "react";

const Picture = (props) => {
    let style = null;
    if (props.url) {
        style = {
            backgroundImage: `url(${props.url})`,
        };
    } else {
        style = props.style;
    }

    return (
        <picture
            className={props.className}
            alt={`Image of ${props.alt}`}
            style={style}
            data-testid="picture-component"
        ></picture>
    );
};

export default Picture;
