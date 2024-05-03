import React, { render, screen } from "@testing-library/react";

import GetData from "./FindOneByCollection";

describe("GetData", () => {
    function handleGetData (data){
        if (data && data !== null && data !== undefined && data !== "") {
            console.log(data);
        }
    };

    it("Shoud render the component", () => {
        render(<GetData />);
        render(
            <GetData
                collection="aboutElements"
                justOne={true}
                parentCallback={this.handleGetData(data)}
            />
        );

        const getData = screen.getByRole("getData");

        expect(getData).toBeInTheDocument();
    });
});
