import React, { render, screen } from "@testing-library/react";

import File from "./File";

describe("File", () => {
    const data = {
        type: "file",
        className: "file",
        name: "file",
        placeholder: "Logo"
    };
    it("Shoud render the component", () => {
        render(<File type={data.type} className={data.className} name={data.name} placeholder={data.placeholder} />);

        let component = screen.getByTestId("file-component");
        expect(component).toBeInTheDocument();
    });
});
