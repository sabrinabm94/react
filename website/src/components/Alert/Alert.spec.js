import React, { render, screen } from "@testing-library/react";

import Alert from "./Alert";

describe("Alert", () => {
    const data = {
       message: "Be careful!",
       testeId: "alert-component",
    }

    //fit("Shoud render the component", () => {
    it("Shoud render the component", () => {
        render(<Alert type="danger" message={data.message} />);

        let component = screen.getByTestId(data.testId);

        expect(component).toBeInTheDocument();
    });

    it("Shoud render the component with props", () => {
        render(<Alert type="danger" message={data.message} />);

        let component = screen.getByTestId(data.testId);

        expect(component).toHaveClass("alert alert-danger");
        expect(component).not.toHaveClass("alert alert-success");
        expect(screen.getByText(data.message)).toBeInTheDocument();
    });

    it("Shoud render the component with the role attribute", () => {
        render(<Alert type="danger" message={data.message} />);
        
        let component = screen.getByTestId(data.testId);

        expect(component).toHaveAttribute("role").toBe("alert");
    });
});