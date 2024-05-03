import { React, useEffect, useState } from "react";

//components
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import DeleteData from "../../../services/DeleteData/DeleteData";

//services
import FindAllByCollection from "../../../services/FindAllByCollection/FindAllByCollection";

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
        FindAllByCollection({
            collection: props.collection,
            parentCallback: handleGetData,
        });
    }, []);

    return (
        <div
            id="admin-show-data"
            className="container-fluid text-center bg-grey"
        >
            <section className="section show-data">
                <h2 className="subtitle">Delete</h2>
                <Dropdown
                    className="show-data-dropdown"
                    id="show-data-dropdown"
                    buttonText="Register list"
                >
                    <>
                        {elements !== null &&
                            elements !== undefined &&
                            elements.length > 0 &&
                            elements.map((data, key) => {
                                return (
                                    <li
                                        className="dropdown-item"
                                        key={key}
                                        id={data.id}
                                    >
                                        <p>
                                            {
                                                data[
                                                props
                                                    .registerTitleInList
                                                ]
                                            }
                                        </p>
                                        <Button
                                            className="btn-danger"
                                            id="remove"
                                            onClick={this.handleDeleteData}
                                        >
                                            x
                                            <DeleteData
                                                ref={
                                                    this.deleteDataComponent
                                                }
                                                collection={
                                                    props.collection
                                                }
                                                dataId={data.id}
                                            />
                                        </Button>
                                    </li>
                                );
                            })}
                    </>
                </Dropdown>
            </section>
        </div>
    );
}
export default About;
