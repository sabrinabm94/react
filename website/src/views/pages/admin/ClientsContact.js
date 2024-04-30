import { React, Component } from "react";

//components
import Painel from "../../components/Painel/Painel";

//services
import GetData from "../../../services/GetData/GetData";

function ClientsContact(props) {
    const [elements, setElements] = React.useState([]);
    const [text, setText] = React.useState("");

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

    React.useEffect(() => {
        GetData({
            collection: "clientsContactElements",
            justOne: false,
            parentCallback: handleGetData,
        });
    }, []);

    return (
        <section
            id="clients-contact"
            className="clients-contact container-fluid bg-grey"
        >
            <h1 className="title">Admin configuration:</h1>
            <h2 className="title">Clientes Contact</h2>

            <h2 className="text-center">CLIENTS CONTACT LIST</h2>
            <div className="row">
                <>
                    {elements.map((data, key) => {
                        return (
                            <div className="col-sm-4" key={key}>
                                <Painel
                                    collection="clientsContactElements"
                                    dataId={data.id}
                                    title={data.name}
                                    subtitle={data.email}
                                    content={data.comment}
                                />
                            </div>
                        );
                    })}
                </>
            </div>
        </section>
    );
}

export default ClientsContact;
