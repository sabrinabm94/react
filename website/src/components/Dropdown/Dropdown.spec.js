import React, { render, screen } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
    const data = [
        {
            id: 1,
            text: "Item 1",
        },
        {
            id: 2,
            text: "Item 2",
        },
    ];

    it("Shoud render the component", () => {
        render(
            <Dropdown className="dropdown" id="dropdown" buttonText="Dropdown">
                <>
                    {data !== null &&
                        data !== undefined &&
                        data.length > 0 &&
                        data.map((data, key) => {
                            return (
                                <li
                                    className="dropdown-item"
                                    key={key}
                                    id={data.id}
                                >
                                    <p>{data.text}</p>
                                </li>
                            );
                        })}
                </>
            </Dropdown>
        );
        expect(screen.getByTestId("dropdown-component")).toBeInTheDocument();
    });
});
