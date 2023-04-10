import React, { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
    const data = {
        className: "btn-secondary dropdown-toggle",
        type: "button",
        dataToggle: "dropdown",
        ariaHaspopup: false,
        ariaExpanded: false,
        testId: "button-component",
    };
    it("Shoud render the component", () => {
        render(
            <Button
                className={data.className}
                type={data.type}
                data-toggle={data.dataToggle}
                aria-haspopup={data.ariaHaspopup}
                aria-expanded={data.ariaExpanded}
            >
                {this.props.buttonText}
            </Button>
        );

        let component = screen.getByTestId(data.testId);

        expect(component).toBeInTheDocument();
        //expect(screen.getByTestId(data.testId)).not.toBeInTheDocument();
    });
});
