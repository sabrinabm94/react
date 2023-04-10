import React, { render, screen } from "@testing-library/react";

import File from "./File";

describe("File", () => {
    it("Shoud render the component", () => {
        render(<File type="file" className="file" name="file" placeholder="Logo" />);

        expect(screen.getByTestId("file-component")).toBeInTheDocument();
    });
});
