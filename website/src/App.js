import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Pages from "./pages/Pages";

class App extends Component {
    render() {
        return (
            <Router data-testid="button-component">
                <div className="app">
                    <Header />
                    <main className="main">
                        <Pages />
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}
export default App;