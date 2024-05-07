import { React, useState, useEffect } from "react";

//components
import PainelSecondary from "../components/PainelSecondary/PainelSecondary";

//services
import FindAllByCollection from "../../services/FindAllByCollection/FindAllByCollection";

function Pricing(props) {
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
        FindAllByCollection("pricingElements").then((elementArray) => {
            handleGetData(elementArray);
        });
    }, []);

    return (
        <section id="pricing" className="pricing container-fluid">
            <div className="text-center">
                <h1 className="title">Pricing</h1>
            </div>
            <div className="row slideanim slide">
                <>
                    {elements.map((data, key) => {
                        return (
                            <div className="col-sm-4 col-xs-12" key={key}>
                                <PainelSecondary
                                    title={data.title}
                                    description={data.content}
                                    value={data.subtitle}
                                    link={data.link}
                                />
                            </div>
                        );
                    })}
                </>
            </div>
        </section>
    );
}

export default Pricing;
