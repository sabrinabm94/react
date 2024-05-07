import { React, useState, useEffect } from "react";

//components
import Carousel from "../components/Carousel/Carousel";

//services
import FindAllByCollection from "../../services/FindAllByCollection/FindAllByCollection";

function Costumers(props) {
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
        FindAllByCollection("costumersElements").then((elementArray) => {
            handleGetData(elementArray);
        });
    }, []);

    return (
        <section id="costumers" className="constumers container-fluid bg-grey">
            <div className="text-center">
                <h1 className="title">COSTUMERS</h1>
                <h2 className="subtitle">What our customers say</h2>
            </div>
            <div className="row slideanim slide">
                <Carousel elements={elements} />
            </div>
        </section>
    );
}

export default Costumers;
