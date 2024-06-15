import React from "react";

const Text = (props) => {
    const fixBreaklines = (text) => {
        if (text && (text !== null && text !== undefined && text !== "")) {
            return text.replace(/\n\r?/g, "<br />");
        }
        return text;
    };

    return (
        <p
            className={props.className}
            data-testid="text-component"
            dangerouslySetInnerHTML={{
                __html: fixBreaklines(props.text),
            }}
        ></p>
    );
};

export default Text;
