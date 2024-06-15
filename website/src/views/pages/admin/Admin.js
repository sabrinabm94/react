import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AuthProtector from "../../../services/AuthProtector/AuthProtector";
import Company from "../admin/Company";
import About from "../admin/About";
import Services from "../admin/Services";
import Portfolio from "../admin/Portfolio";
import Costumers from "../admin/Costumers";
import Pricing from "../admin/Pricing";
import Contact from "../admin/Contact";
import ClientsContact from "../admin/ClientsContact";
import RegisterUser from "../auth/RegisterUser";

const Admin = ({ isAuthenticated }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isAuthenticatedCookie, setIsAuthenticatedCookie] = useState(false);

    useEffect(() => {
        const isAuthenticated = checkCookie("isAuthenticated");
        setIsAuthenticatedCookie(isAuthenticated);
    }, [location.pathname]);

    useEffect(() => {
    }, [location.pathname, isAuthenticatedCookie, navigate]);

    const checkCookie = (name) => {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(";");

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return (
                    cookie.substring(cookieName.length, cookie.length) ===
                    "true"
                );
            }
        }
        return false;
    };

    return (
        <div className="admin" id="admin">
            <h1 className="title">Admin area</h1>
            <AuthProtector link="/login" />
            <Routes>
                <Route path="company" element={<Company />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="costumers" element={<Costumers />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="contact" element={<Contact />} />
                <Route path="clientsContact" element={<ClientsContact />} />
                <Route path="register" element={<RegisterUser />} />
            </Routes>
        </div>
    );
};

export default Admin;
