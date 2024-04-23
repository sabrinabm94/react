import React, { render, screen } from "@testing-library/react";

import RegisterOrLoginUser from "./RegisterOrLoginUser";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";

describe("RegisterOrLoginUser", () => {
    it("Shoud render the component", () => {
        render(
            <RegisterOrLoginUser
                action="test"
                id="testForm"
                className="test"
                button="test"
            >
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <Input
                            type="text"
                            className="input"
                            id="test"
                            name="test"
                            placeholder="Type herew"
                        />
                        <Button
                            type="button"
                            className="btn-primary button"
                            id="button"
                            text="send"
                        />
                    </div>
                </div>
            </RegisterOrLoginUser>
        );
        let component = screen.getByTestId("register-or-login-user-component");
        expect(
            component
        ).toBeInTheDocument();
    });
});
