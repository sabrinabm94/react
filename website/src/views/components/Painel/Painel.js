import { React, useState } from "react";

//components
import DeleteData from "../../../services/DeleteData/DeleteData";

function Painel(props) {
    const [elements, setElements] = useState([]);
    
    const handleDeleteData = (id) => {
        DeleteData(props.collection, id).then(function(response) {
            setElements(prevElements => prevElements.filter(element => element.id !== id)); //para atualização da página
        }).catch(function(error) {
            console.log("handle error: ", error);
        });
    }

    return (
        <>
            <div className="panel panel-default text-center" id={props.dataId} data-testid="painel-component">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="remove" id="remove" onClick={handleDeleteData}>x</span>
                    </div>
                </div>
                <div className="panel-heading">
                    <h2 className="title">{props.title}</h2>
                </div>
                <div className="panel-body">
                    <p
                        className="content"
                        dangerouslySetInnerHTML={{ __html: props.content }}
                    />
                </div>
                <div className="panel-footer">
                    <h3 className="subtitle">{props.subtitle}</h3>
                </div>
            </div>
        </>
    );
}
export default Painel;

