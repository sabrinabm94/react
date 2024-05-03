import { React, useState, useEffect } from "react";

//components
import Thumbnail from "../components/Thumbnail/Thumbnail";


//services
import FindAllByCollection from "../../services/FindAllByCollection/FindAllByCollection";

function Portfolio(props) {
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
            collection: "portfolioElements",
            parentCallback: handleGetData,
        });
    }, []);

    return (
        <section
            id="portfolio"
            className="portfolio container-fluid bg-grey"
        >
            <div className="text-center">
                <h1 className="title">PORTFOLIO</h1>
                <h2 className="subtitle">What we have created</h2>
            </div>
            <div className="row text-center slideanim slide">
                <>
                    {elements.map((data, key) => {
                        return (
                            <div className="col-sm-4" key={key}>
                                <Thumbnail
                                    url={data.file}
                                    title={data.title}
                                    subtitle={data.subtitle}
                                />
                            </div>
                        );
                    })}
                </>
            </div>
            <br />
        </section>
    );
}

export default Portfolio;
