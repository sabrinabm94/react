import React, { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
    const data = {
        type: "text",
        className: "input",
        name: "name",
        placeholder: "Name",
        required: true,
    };
    it("Shoud render the component", () => {
        render(
            <Input
                type={data.type}
                className={data.className}
                name={data.name}
                placeholder={data.placeholder}
                required={data.required}
            />
        );
        let component = screen.getByTestId("input-component");
        expect(component).toBeInTheDocument();
    });
});
