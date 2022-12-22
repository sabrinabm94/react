import { React, Component } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../init-firebase";

//components
import Alert from "../Alert/Alert";

class RegisterOrLoginUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isAuthenticated: false,
            user: null
        }
    }

    componentDidMount() {
        this.registerOrLoginUser(this.props.action, this.props.id, this.props.email, this.props.password, this.props.button);
    }

    registerOrLoginUser(action, formClassname, emailClassname, passwordClassname, buttonClassname) {
        console.log(buttonClassname);
        let buttonElement = document.querySelector("#" + buttonClassname);

        if (buttonElement && buttonElement !== undefined) {
            buttonElement.addEventListener("click", function () {
                //console.log("submit authentication");

                let formElement = document.querySelector("#" + formClassname);

                if (formElement) {
                    let authObject = {
                        email: null,
                        password: null
                    };
                    let loginEmailElement = formElement.querySelector("#" + emailClassname);
                    let loginPasswordElement = formElement.querySelector("#" + passwordClassname);

                    if (loginEmailElement && loginEmailElement !== undefined) {
                        authObject.email = loginEmailElement.value;
                    }

                    if (loginPasswordElement && loginPasswordElement !== undefined) {
                        authObject.password = loginPasswordElement.value;
                    }

                    if (authObject 
                        && (authObject.email !== null && authObject.email !== undefined && authObject.email !== "") 
                        && (authObject.password !== null && authObject.password !== undefined && authObject.password !== "")
                    ) {
                        if (action === "login") {
                            signInWithEmailAndPassword(auth, authObject.email, authObject.password)
                                .then((userCredential) => {
                                    // this.setState({ //todo verificar porque o erro no setState
                                    //     error: null,
                                    //     user: userCredential.user,
                                    //     isAuthenticated: true,
                                    // })
                                    if(window !== undefined) {
                                        alert("loggin....");
                                        return  window.location.href = "/admin/company";
                                    }
                                })
                                .catch((err) => {
                                    // this.setState({ //todo verificar porque o erro no setState
                                    //     error: err,
                                    //     user: null,
                                    //     isAuthenticated: false
                                    // })
                                    alert(err);
                                    return err;
                                });
                        }

                        if (action === "register") {
                            createUserWithEmailAndPassword(auth, authObject.email, authObject.password)
                                .then((userCredential) => {
                                    // this.setState({ //todo verificar porque o erro no setState
                                    //     error: null,
                                    //     user: userCredential.user,
                                    //     isAuthenticated: true,
                                    // })
                                    if(window !== undefined) {
                                        alert("New user created, loggin....");
                                        return  window.location.href = "/admin/company";
                                    }
                                })
                                .catch((err) => {
                                    // this.setState({ //todo verificar porque o erro no setState
                                    //     error: err,
                                    //     user: null,
                                    //     isAuthenticated: false
                                    // })
                                    return err;
                                });

                        }
                    } else {
                        //let err = "Preencha todos os campos obrigatórios!";
                        // this.setState({ //todo verificar porque o erro no setState
                        //     error: err,
                        //     user: null,
                        //     isAuthenticated: false
                        // })
                    }
                }
            });
        }
    }

    render() {
        return (
            <form className={this.props.className} id={this.props.id} data-testid="register-or-login-user-component">
                {this.props.children}
                {this.state.error && this.state.error !== null && <Alert type="danger" message={this.state.error} />}
            </form>
        );
    }
}
export default RegisterOrLoginUser;
