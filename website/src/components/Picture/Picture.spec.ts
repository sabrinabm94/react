import React, { render, screen } from "@testing-library/react";

import Picture from "./Picture";

describe("Picture", () => {
    const data = {
        url: "/",
        className: "picture",
        alt: "picture",
    };
    // it("Shoud render the component", () => {
    //     render(
    //         <Picture url={data.url} className={data.className} alt={data.alt} />
    //     );

    //     expect(screen.getByTestId("Picture-component")).toBeInTheDocument();
    // });
});
