import React, { render, screen } from "@testing-library/react";

import Textarea from "./Textarea";

describe("Textarea", () => {
    const data = {
        type: "text",
        className: "input",
        name: "name",
        placeholder: "Name",
        required: true,
    };
    it("Shoud render the component", () => {
        render(
            <Textarea
                className={data.className}
                name={data.className}
                placeholder={data.placeholder}
                required={data.required}
            />
        );
        let component = screen.getByTestId("textarea-component");
        expect(component).toBeInTheDocument();
    });
});
