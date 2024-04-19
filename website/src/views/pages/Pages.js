import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Páginas
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Costumers from "./Costumers";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Admin from "./admin/Admin";
import RegisterUser from "./auth/RegisterUser";
import LoginUser from "./auth/LoginUser";
import NotFound from "./NotFound";

const Pages = ({ onAuthChange }) => {
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
        <div className="pages">
            <Routes>
                <Route path="/" element={<About />} />
                <Route
                    path="/login"
                    element={<LoginUser onAuthChange={onAuthChange} />}
                />
                <Route path="/admin/login" element={<Navigate to="/login" />} />
                <Route
                    path="/register"
                    element={<RegisterUser onAuthChange={onAuthChange} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/costumers" element={<Costumers />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                {isAuthenticated && isAuthenticated === true ? (
                    <Route path="/admin/*" element={<Admin />} />
                ) : (
                    <Route path="/login/" element={<LoginUser />} />
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Pages;
