import { React, useState, useEffect } from "react";

//components
import Glyphicon from "../components/Glyphicon/Glyphicon";
import Text from "../components/Text/Text";

//services
import FindOneByCollection from "../../services/FindOneByCollection/FindOneByCollection";

function About(props) {
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
        FindOneByCollection("aboutElements").then((elementArray) => {
            handleGetData(elementArray);
        });
    }, []);

    return (
        <section id="about" className="about container-fluid bg-grey">
            <div className="text-center">
                <h1 className="title">ABOUT US</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <Glyphicon name={`${elements.icon} logo slideanim slide`} />
                </div>
                <div className="col-sm-8">
                    <h2 className="title">{elements.title}</h2>
                    <Text
                        className="subtitle"
                        text={elements.content}
                        parentCallback={handleBreaklines}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
