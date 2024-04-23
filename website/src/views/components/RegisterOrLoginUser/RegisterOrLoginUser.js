import React, { useState, useEffect } from "react";
import Alert from "../Alert/Alert";
import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "../../../init-firebase";

const RegisterOrLoginUser = (props) => {
    const [error, setError] = useState(null);
    const [isAuthenticated, updateIsAuthenticated] = useState(false);

    useEffect(() => {
        registerOrLoginUser();
    }, []);
    
    // Função para definir o cookie para controlar autenticação
    const setCookie = (name, value, expiresInSeconds) => {
        const date = new Date();
        date.setTime(date.getTime() + expiresInSeconds * 1000);
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    useEffect(() => {
        console.log("isAuthenticated " + isAuthenticated);
        if (isAuthenticated === true) {
            setCookie("isAuthenticated", isAuthenticated.toString(), 3600);
        } 
    }, [isAuthenticated]);

    const registerOrLoginUser = () => {
        const buttonElement = document.querySelector(`#${props.button}`);

        if (buttonElement && buttonElement !== undefined) {
            buttonElement.addEventListener("click", () => {
                const formElement = document.querySelector(`#${props.id}`);

                if (formElement) {
                    let authObject = {
                        email: null,
                        password: null,
                    };

                    const loginEmailElement = formElement.querySelector(
                        `#${props.email}`
                    );
                    const loginPasswordElement = formElement.querySelector(
                        `#${props.password}`
                    );

                    if (loginEmailElement && loginEmailElement !== undefined) {
                        authObject.email = loginEmailElement.value;
                    }

                    if (
                        loginPasswordElement &&
                        loginPasswordElement !== undefined
                    ) {
                        authObject.password = loginPasswordElement.value;
                    }

                    if (
                        authObject.email &&
                        authObject.password &&
                        authObject.email !== "" &&
                        authObject.password !== ""
                    ) {
                        const { action } = props;

                        if (action === "login") {
                            signInWithEmailAndPassword(
                                auth,
                                authObject.email,
                                authObject.password
                            )
                                .then((userCredential) => {
                                    if (userCredential) {
                                        let user = userCredential.user;
                                        let firebaseLoginToken = null;
                                        let firebaseLoginUid = user.uid;

                                        if (userCredential.idToken) {
                                            firebaseLoginToken =
                                                userCredential.idToken;
                                        }

                                        if (firebaseLoginUid) {
                                            updateIsAuthenticated(true);
                                            if (window !== undefined) {
                                                alert("Entrando....");
                                                window.location.href =
                                                    "/admin/company";
                                            }
                                        }
                                    }
                                })
                                .catch((err) => {
                                    updateIsAuthenticated(false);
                                    console.log("Erro: ", err);
                                    alert(err);
                                });
                        } else if (action === "register") {
                            createUserWithEmailAndPassword(
                                auth,
                                authObject.email,
                                authObject.password
                            )
                                .then(() => {
                                    updateIsAuthenticated(true);
                                    if (window !== undefined) {
                                        alert(
                                            "Criando novo usuário e entrando...."
                                        );
                                        window.location.href = "/admin/company";
                                    }
                                })
                                .catch((err) => {
                                    updateIsAuthenticated(false);
                                    alert(err);
                                });
                        }
                    } else {
                        let err = "Preencha todos os campos obrigatórios!";
                        setError(err);
                    }
                }
            });
        }
    };

    return (
        <form
            className={props.className}
            id={props.id}
            data-testid="register-or-login-user-component"
        >
            {props.children}
            {error && <Alert type="danger" message={error} />}
        </form>
    );
};

export default RegisterOrLoginUser;
