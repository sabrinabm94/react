// LoginUser.js
import React from "react";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import RegisterOrLoginUser from "../../components/RegisterOrLoginUser/RegisterOrLoginUser";

const LoginUser = ({ onAuthChange }) => {
    const handleAuthChange = (authenticated) => {
        onAuthChange(authenticated);
    };

    return (
        <div id="page-login" className="container-fluid text-center bg-grey">
            <section className="section page-login">
                <h2 className="title">Login</h2>
                <RegisterOrLoginUser
                    action="login"
                    id="loginForm"
                    className="loginForm"
                    email="email"
                    password="password"
                    button="loginButton"
                    onAuthChange={handleAuthChange}
                >
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <Input
                                type="text"
                                className="input"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <Input
                                type="text"
                                className="input"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <Button
                                type="button"
                                className="btn-primary loginButton"
                                id="loginButton"
                                text="Login"
                            />
                        </div>
                    </div>
                </RegisterOrLoginUser>
            </section>
        </div>
    );
};
export default LoginUser;
