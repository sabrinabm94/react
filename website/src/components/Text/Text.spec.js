import React, { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
    it("Shoud render the component", () => {
        render(<Text className="text" text="a good text" />);

        expect(screen.getByTestId("text-component")).toBeInTheDocument();
    });
});
