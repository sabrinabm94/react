// RegisterUser.js
import React, { useRef } from "react";
import Input from "../../../components/Form/Input/Input";
import Button from "../../../components/Button/Button";
import RegisterOrLoginUser from "../../../components/RegisterOrLoginUser/RegisterOrLoginUser";
import AuthProtector from "../../../services/AuthProtector/AuthProtector";

const RegisterUser = ({ onAuthChange }) => {
    const authProtectorComponent = useRef(null);

    const handleAuthChange = (authenticated) => {
        onAuthChange(authenticated);
    };

    return (
        <div id="admin-users" className="container-fluid text-center bg-grey">
            <section className="section admin-users">
                <h2 className="title">Users</h2>
                <h2 className="subtitle">New register</h2>
                <AuthProtector ref={authProtectorComponent} link="/login" />
                <RegisterOrLoginUser
                    action="register"
                    id="registerForm"
                    className="registerForm"
                    email="email"
                    password="password"
                    button="registerButton"
                    onAuthChange={handleAuthChange} // Corrigido
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
                                className="btn-primary registerButton"
                                id="registerButton"
                                text="Register"
                            />
                        </div>
                    </div>
                </RegisterOrLoginUser>
            </section>
        </div>
    );
};

export default RegisterUser;
