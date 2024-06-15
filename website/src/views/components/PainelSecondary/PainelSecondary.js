import React, { useState } from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";

const PainelSecondary = (props) => {
    const [text, setText] = useState("");

    const handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setText(data);
        }
    };

    return (
        <div className="panel panel-default text-center" data-testid="painel-secondary-component">
            <div className="panel-heading">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="panel-body">
                <Text className="content" text={props.description} parentCallback={handleBreaklines} />
            </div>
            <div className="panel-footer">
                <h3 className="subtitle">{props.value}</h3>
                <a className="link" href={props.link}>
                    <Button
                        text="Sign Up"
                        type="submit"
                        disabled={true}
                    />
                </a>
            </div>
        </div>
    );
};

export default PainelSecondary;
