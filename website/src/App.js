// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./views/templates/Header";
import Footer from "./views/templates/Footer";
import Pages from "./views/pages/Pages";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verificar se o usuário está autenticado
        checkUserAuthentication();
    }, []);

    // Função para verificar se o usuário está autenticado
    const checkUserAuthentication = () => {
        const isAuthenticatedCookie = getCookie("isAuthenticated");

        // Verifica se o cookie de autenticação existe e está definido como true
        if (isAuthenticatedCookie && isAuthenticatedCookie === "true") {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }

        console.log("isAuthenticatedCookie ", isAuthenticatedCookie);

        return isAuthenticatedCookie;
    };

    // Função para obter o valor de um cookie pelo nome
    const getCookie = (name) => {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(";");

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    };

    return (
        <Router>
            <div className="app">
                <Header isAuthenticated={isAuthenticated} />
                <main className="main">
                    <Pages />
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
