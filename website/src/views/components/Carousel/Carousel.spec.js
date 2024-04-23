import React, { render, screen } from "@testing-library/react";

import Carousel from "./Carousel";

describe("Carousel", () => {
    const data = [
        {
            id: 1,
            title: "Hello",
            subtitle: "World",
        },
        {
            id: 2,
            title: "Goodbye",
            subtitle: "People",
        },
    ];
    it("Shoud render the component", () => {
        render(
            <Carousel elements={data} />
        );
        let component = screen.getByTestId("card-component");
        expect(component).toBeInTheDocument();
    });
});
