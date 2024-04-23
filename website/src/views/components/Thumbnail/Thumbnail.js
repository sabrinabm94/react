import { React, Component } from "react";

//components
import Text from "../Text/Text";
import Picture from "../Picture/Picture";

class Thumbnail extends Component {
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
        let style = {
            backgroundImage: `url(${this.props.url})`,
        };

        return (
            <div className="thumbnail" data-testid="thumbnail-component">
                <Picture
                    className="picture"
                    alt={`Image of ${this.props.title}`}
                    style={style}
                />
                <h2 className="title">
                    <strong>{this.props.title}</strong>
                </h2>
                <Text
                    className="subtitle"
                    text={this.props.subtitle}
                    parentCallback={this.handleBreaklines}
                />
            </div>
        );
    }
}

export default Thumbnail;
