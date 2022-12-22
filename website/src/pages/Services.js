import { React, Component } from "react";

//components
import Card from "../components/Card/Card";
import GetData from "../components/utils/GetData/GetData";

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
        };
    }

    handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ elements: data });
        }
    };

    render() {
        return (
            <section id="services" className="services container-fluid">
                <GetData
                    collection="servicesElements"
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
                <div className="text-center">
                    <h1 className="title">SERVICES</h1>
                    <h2 className="subtitle">What we offer</h2>
                </div>
                <div className="row slideanim slide text-center">
                    <>
                        {this.state.elements.map((data, key) => {
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
}

export default Services;
