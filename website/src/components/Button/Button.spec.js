import React, { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
    it("Shoud render the component", () => {
        render(<Button />);

        expect(screen.getByTestId("button-component")).toBeInTheDocument();
        //expect(screen.getByTestId("Button-component")).not.toBeInTheDocument();
    });
});