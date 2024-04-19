import React, { Component } from "react";

//components
import Button from "../../../components/Button/Button";
import Input from "../../../components/Form/Input/Input";
import Form from "../../../components/Form/Form/Form";

//templates
import ShowData from "../../templates/admin/ShowData";

class Portfolio extends Component {
    render() {
        return (
            <div
            id="admin-costumers"
            className="container-fluid text-center bg-grey"
        >
            <section className="section admin-costumers">
                <h1 className="title">Admin configuration:</h1>
                <h2 className="title">Costumers</h2>
                <ShowData collection="costumersElements" registerTitleInList="title" />
                <h2 className="subtitle">New register</h2>
                    <Form collection="costumersElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="title"
                                    placeholder="title"
                                />
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="subtitle"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <Button
                                    type="submit"
                                    className="btn-primary"
                                    text="Submit"
                                />
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        );
    }
}
export default Portfolio;
