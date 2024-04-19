import React from "react";
import Glyphicon from "../../components/Glyphicon/Glyphicon";

const Footer = (props) => {
    return (
        <footer id="footer" class="footer container-fluid">
            <a className="title" href="#search" title="Go Top">
                <Glyphicon name="chevron-up" />
            </a>
        </footer>
    );
};
export default Footer;
