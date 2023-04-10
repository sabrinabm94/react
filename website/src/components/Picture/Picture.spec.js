import React, { render, screen } from "@testing-library/react";
import Picture from "./Picture";

describe("Picture", () => {
    const message = "Be careful!";
    //fit("Shoud render the component", () => {
    it("Shoud render the component", () => {
        const data = {
            url: "/",
            className: "picture",
            alt: "picture",
        };
        render(
            <Picture url={data.url} className={data.className} alt={data.alt} />
        );
        let component = screen.getByTestId("picture-component");
        expect(component).toBeInTheDocument();
    });
});
