import { React, useState, useEffect } from "react";

//components
import Text from "../components/Text/Text";

//services
import FindOneByCollection from "../../services/FindOneByCollection/FindOneByCollection";

function PageHeader(props) {
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
        FindOneByCollection({
            collection: "companyElements",
            parentCallback: handleGetData,
        });
    }, []);

    return (
        <section className="page-header jumbotron text-center">
            <h1 className="title">{elements.name}</h1>
            <Text
                className="subtitle"
                text={elements.content}
                parentCallback={handleBreaklines}
            />
        </section>
    );
}

export default PageHeader;
