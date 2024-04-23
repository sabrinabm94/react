import React, { render, screen } from "@testing-library/react";

import Glyphicon from "./Glyphicon";

describe("Glyphicon", () => {
    it("Shoud render the component", () => {
        const data = {
            name: "certificate"
        }
        render(<Glyphicon name={data.name} />);
        let component = screen.getByTestId("glyphicon-component");
        expect(component).toBeInTheDocument();
    });
});