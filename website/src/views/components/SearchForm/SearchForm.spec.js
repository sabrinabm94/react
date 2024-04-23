/* eslint-disable testing-library/no-node-access */
import React, { render, screen } from "@testing-library/react";

import SearchForm from "./SearchForm";

describe("SearchForm", () => {
    const buttonText = "Search";
    it("Shoud render the component", () => {
        render(<SearchForm />);

        const form = screen.getByRole("form");

        expect(form).toBeInTheDocument();
        expect(form.getElementsByClassName("input")).toBeInTheDocument();
        expect(form.getElementsByClassName("button")).toBeInTheDocument();
    });

    it("Shoud render the button with text", () => {
        render(<SearchForm />);

        const form = screen.getByRole("form");
        const component = form.getElementsByClassName("button");

        expect(component).toBeInTheDocument();
        expect(component.text()).toBeEqual(buttonText);
    });
});