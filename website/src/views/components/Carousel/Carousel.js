import React, { Component } from "react";

//components
import Glyphicon from "../Glyphicon/Glyphicon";
import Text from "../Text/Text";

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
        };
    }

    handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ text: data });
        }
    };

    render() {
        return (
            <>
            <div
                id="myCarousel"
                className="carousel slide text-center"
                data-ride="carousel"
                data-testid="carousel-component"
            >
                <ol className="carousel-indicators">
                    <>
                        {this.props.elements.map((data, key) => {
                            let target = null;

                            if (key === 0) {
                                target = (
                                    <li
                                        data-target="#myCarousel"
                                        data-slide-to={data.number}
                                        className="active"
                                        key={key}
                                    ></li>
                                );
                            } else {
                                target = (
                                    <li
                                        data-target="#myCarousel"
                                        data-slide-to={data.number}
                                        key={key}
                                    ></li>
                                );
                            }

                            return target;
                        })}
                    </>
                </ol>
                <div className="carousel-inner" role="listbox">
                    {this.props.elements.map((data, key) => {
                        let item = null;

                        if (key === 0) {
                            item = (
                                <div className="item active" key={key}>
                                    <h4>{data.title}</h4>
                                    <Text
                                        className="subtitle"
                                        text={data.subtitle}
                                        parentCallback={this.handleBreaklines}
                                    />
                                </div>
                            );
                        } else {
                            item = (
                                <div className="item" key={key}>
                                    <h4>{data.title}</h4>
                                    <Text
                                        className="subtitle"
                                        text={data.subtitle}
                                        parentCallback={this.handleBreaklines}
                                    />
                                </div>
                            );
                        }
                        return item;
                    })}
                </div>
                <a
                    className="left carousel-control"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                >
                    <Glyphicon name="chevron-left" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="right carousel-control"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                >
                    <Glyphicon name="chevron-right" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </>
        );
    }
}

export default Carousel;
