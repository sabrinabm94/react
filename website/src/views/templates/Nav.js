import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Button from "../components/Button/Button";
import Picture from "../components/Picture/Picture";

//services
import FindAllByCollection from "../../services/FindAllByCollection/FindAllByCollection";

function Nav(props) {
    const [elements, setElements] = useState([]);
    const [text, setText] = useState("");

    const handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setElements(data);
        }
    };

    const handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setText(data);
        }
    };

    useEffect(() => {
        FindAllByCollection({
            collection: "companyElements",
            parentCallback: handleGetData,
        });
    }, []);

    return (
        <nav className="navbar navbar-default navbar-fixed-top" id="nav">
            <div className="container">
                <div className="navbar-header">
                    <Button
                        type="button"
                        className="navbar-toggle"
                        dataToggle="collapse"
                        dataTarget="#myNavbar"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </Button>

                    <a className="navbar-brand" href="/">
                        <Picture
                            className="picture logo"
                            alt="company logo"
                            url={elements.file}
                        />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/about/">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/services/">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/costumers/">COSTUMERS</Link>
                        </li>
                        <li>
                            <Link to="/pricing/">PRICING</Link>
                        </li>
                        <li>
                            <Link to="/contact/">CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/login/">LOGIN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
