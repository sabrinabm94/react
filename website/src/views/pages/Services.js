import { React, useState, useEffect } from "react";

//components
import Card from "../components/Card/Card";

//services
import FindAllByCollection from "../../services/FindAllByCollection/FindAllByCollection";

function Services(props) {
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
            collection: "servicesElements",
            parentCallback: handleGetData,
        });
    }, []);

    return (
        <section id="services" className="services container-fluid">
            <div className="text-center">
                <h1 className="title">SERVICES</h1>
                <h2 className="subtitle">What we offer</h2>
            </div>
            <div className="row slideanim slide text-center">
                <>
                    {elements.map((data, key) => {
                        return (
                            <div className="col-sm-4" key={key}>
                                <Card
                                    iconName={`${data.icon} logo-small`}
                                    title={data.title}
                                    subtitle={data.subtitle}
                                />
                            </div>
                        );
                    })}
                </>
            </div>
        </section>
    );
}

export default Services;
