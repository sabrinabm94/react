import React, { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
    const data = {
        className: "text",
        text: "a good text"
    };
    it("Shoud render the component", () => {
        render(<Text className={data.className} text={data.text} />);
        let component = screen.getByTestId("text-component");
        expect(component).toBeInTheDocument();
    });
});
