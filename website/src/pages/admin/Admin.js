import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

//templates
import Header from "../../templates/admin/Header";

//page
import Company from "../admin/Company";
import About from "../admin/About";
import Services from "../admin/Services";
import Portfolio from "../admin/Portfolio";
import Costumers from "../admin/Costumers";
import Pricing from "../admin/Pricing";
import Contact from "../admin/Contact";
import ClientsContact from "../admin/ClientsContact";
import RegisterUser from "../auth/RegisterUser";

//components
import AuthProtector from "../../components/utils/AuthProtector/AuthProtector";

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            user: null
        }

        this.authProtectorComponent = React.createRef();
    }

    handleAuthProtector = (link) => {
        this.authProtectorComponent.current.justLoggedUsersRedirect(link);
    }

    componentDidMount() {
        this.handleAuthProtector("/login");
    }

    render() {
        return (
            <div className="admin" id="admin">
                <h1 className="title">Admin area</h1>
                <AuthProtector ref={this.authProtectorComponent} link="/login" />
                <Header />
                <Routes>
                    <Route path="company" element={<Company />} />
                </Routes>
                <Routes>
                    <Route path="about" element={<About />} />
                </Routes>
                <Routes>
                    <Route path="services" element={<Services />} />
                </Routes>
                <Routes>
                    <Route path="portfolio" element={<Portfolio />} />
                </Routes>
                <Routes>
                    <Route path="costumers" element={<Costumers />} />
                </Routes>
                <Routes>
                    <Route path="pricing" element={<Pricing />} />
                </Routes>
                <Routes>
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Routes>
                    <Route path="clientsContact" element={<ClientsContact />} />
                </Routes>
                <Routes>
                    <Route path="register" element={<RegisterUser />} />
                </Routes>
            </div>
        );
    }
}

export default Admin;
