import React from "react";
import { useLocation } from "react-router-dom";
import NavAdmin from "../templates/admin/Nav";
import Nav from "../templates/Nav";

const Header = () => {
    const location = useLocation();
    const isAuthenticated = checkUserAuthentication();

    // Função para verificar se o usuário está autenticado com base no cookie
    function checkUserAuthentication() {
        let isAuthenticatedCookie = getCookie("isAuthenticated");
        if (isAuthenticatedCookie.toLowerCase() === "true" || isAuthenticatedCookie === true) {
            isAuthenticatedCookie = true;
        } else {
            isAuthenticatedCookie = false;
        }
        return isAuthenticatedCookie;
    }

    // Função para ler o valor do cookie
    function getCookie(name) {
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
    }

    return (
        <header id="header" className={`header ${isAuthenticated && isAuthenticated === true ? "header-admin" : ""}`}>
            {isAuthenticated && isAuthenticated === true && isAuthenticated === true ? <NavAdmin /> : <Nav />}
        </header>
    );
};

export default Header;