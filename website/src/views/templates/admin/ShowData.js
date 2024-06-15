import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import DeleteData from "../../../services/DeleteData/DeleteData";
import FindAllByCollection from "../../../services/FindAllByCollection/FindAllByCollection";
import Alert from "../../components/Alert/Alert";

function ShowData({ collection, registerTitleInList }) {
    const [elements, setElements] = useState([]);

    // Função para buscar dados
    const handleGetData = () => {
        return new Promise((resolve, reject) => {
            FindAllByCollection(collection)
                .then(data => {
                    setElements(data);
                    resolve();
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    reject(error);
                });
        });
    };

    // Função para deletar dados
    const handleDeleteData = (id) => {
        return new Promise((resolve, reject) => {
            DeleteData(collection, id)
                .then(() => {
                    setElements(prevElements => prevElements.filter(element => element.id !== id)); //atualização de estado para novos elementos existentes atualizando a tela automaticamente
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    };

    useEffect(() => {
        handleGetData().catch(error => console.error("Error in useEffect handleGetData:", error));
    }, [collection]);

    return (
        <div id="admin-show-data" className="container-fluid text-center bg-grey">
            <section className="section show-data">
                <h2 className="subtitle">Delete</h2>
                <Dropdown
                    className="show-data-dropdown"
                    id="show-data-dropdown"
                    buttonText="Register list"
                    onOpen={handleGetData} // Atualiza os valores quando é aberto
                >
                    <>
                        {elements && elements.length > 0 ? (
                            elements.map((element) => (
                                <li className="show-data-dropdown-item" key={element.id} id={element.id}>
                                    <p>{element[registerTitleInList]}</p>
                                    <Button
                                        className="btn-danger"
                                        onClick={() => handleDeleteData(element.id)}
                                    >
                                        x
                                    </Button>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item">No data available</li>
                        )}
                    </>
                </Dropdown>
                <Alert />
            </section>
        </div>
    );
}

export default ShowData;
