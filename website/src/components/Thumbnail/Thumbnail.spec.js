import React, { render, screen } from "@testing-library/react";

import Thumbnail from "./Thumbnail";

describe("Thumbnail", () => {
    const data = {
        url: "/",
        title: "A title",
        subtitle: "More content for you",
    };
    it("Shoud render the component", () => {
        render(
            <Thumbnail
                url={data.file}
                title={data.title}
                subtitle={data.subtitle}
            />
        );
        let component = screen.getByTestId("thumbnail-component");
        expect(component).toBeInTheDocument();
    });
});
