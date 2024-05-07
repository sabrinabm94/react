import { React, useState, useEffect } from "react";

//components
import Picture from "../components/Picture/Picture";
import Glyphicon from "../components/Glyphicon/Glyphicon";
import Button from "../components/Button/Button";
import Input from "../components/Form/Input/Input";
import Textarea from "../components/Form/Textarea/Textarea";
import Form from "../components/Form/Form/Form";
import Text from "../components/Text/Text";

//services
import FindOneByCollection from "../../services/FindOneByCollection/FindOneByCollection";

function Contact(props) {
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
        FindOneByCollection("contactElements").then((elementArray) => {
            handleGetData(elementArray);
        });
    }, []);

    return (
        <section id="contact" className="contact container-fluid bg-grey">
            <div className="text-center">
                <h1 className="title">CONTACT</h1>
                <h2 className="subtitle">Send your message</h2>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <Text
                        className="content"
                        text={elements.content}
                        parentCallback={handleBreaklines}
                    />
                    <p>
                        <Glyphicon name="map-marker" /> {elements.address}
                    </p>
                    <p>
                        <Glyphicon name="phone" /> {elements.phone}
                    </p>
                    <p>
                        <Glyphicon name="envelope" /> {elements.email}
                    </p>
                </div>
                <div className="col-sm-7 slideanim slide">
                    <Form collection="clientsContactElements" className="form">
                        <div className="row">
                            <div className="col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="name"
                                    placeholder="name"
                                    required={true}
                                />
                            </div>
                            <div className="col-sm-6">
                                <Input
                                    type="text"
                                    className="email"
                                    name="email"
                                    placeholder="email"
                                    required={true}
                                />
                            </div>
                            <div className="col-sm-12">
                                <Textarea
                                    className="input"
                                    name="comment"
                                    placeholder="comment"
                                    required={true}
                                />
                                <Button
                                    type="submit"
                                    className="btn-primary"
                                    text="Submit"
                                    disabled={false}
                                />
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Picture url={elements.file} className="picture" alt="map" />
        </section>
    );
}

export default Contact;
