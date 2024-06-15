import React, { useState } from "react";

//components
import Glyphicon from "../Glyphicon/Glyphicon";
import Text from "../Text/Text";

const Carousel = (props) => {
    const [text, setText] = useState("");

    const handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            setText(data);
        }
    };

    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide text-center"
                data-ride="carousel"
                data-testid="carousel-component"
            >
                <ol className="carousel-indicators">
                    {props.elements.map((data, key) => (
                        <li
                            data-target="#myCarousel"
                            data-slide-to={data.number}
                            className={key === 0 ? "active" : ""}
                            key={key}
                        ></li>
                    ))}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {props.elements.map((data, key) => (
                        <div className={`item ${key === 0 ? "active" : ""}`} key={key}>
                            <h4>{data.title}</h4>
                            <Text
                                className="subtitle"
                                text={data.subtitle}
                                parentCallback={handleBreaklines}
                            />
                        </div>
                    ))}
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
};

export default Carousel;
