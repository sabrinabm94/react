import React, { render, screen } from "@testing-library/react";

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

describe("Form", () => {
    it("Shoud render the component", () => {
        render(
            <Form className="form">
                <div className="row">
                    <div className="col-sm-10">
                        <Input
                            type="text"
                            className="input"
                            placeholder="form"
                            required={true}
                        />
                    </div>
                    <div className="col-sm-2">
                        <Button
                            text="form"
                            className="btn-danger btn-full"
                            type="button"
                            disabled={false}
                        />
                    </div>
                </div>
            </Form>
        );

        expect(screen.getByTestId("form-component")).toBeInTheDocument();
    });
});
