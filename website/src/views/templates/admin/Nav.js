import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, signOut } from "../../../init-firebase";

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Função para definir o cookie para controlar autenticação
    const setCookie = (name, value, expiresInSeconds) => {
        const date = new Date();
        date.setTime(date.getTime() + expiresInSeconds * 1000);
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setIsAuthenticated(false); 
                setCookie("isAuthenticated", "false", 3600); // Define como falso ao fazer logout
                alert("Saindo...");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Erro ao sair: ", error);
            });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-admin">
            <div className="navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a>Admin menu:</a>
                    </li>
                    <li className="nav-item active">
                        <Link to="/admin/company">
                            Company
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/costumers">Costumers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/clientsContact">Clients Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/register">Register User</Link>
                    </li>
                    <li className="nav-item loggout" id="loggout">
                        <Link to="/admin/login" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
