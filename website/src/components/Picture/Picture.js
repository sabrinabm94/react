import React, { Component } from "react";

class Picture extends Component {
    render() {
        let style = null;
        if (this.props.url) {
            style = {
                backgroundImage: `url(${this.props.url})`,
            };
        } else {
            style = this.props.style;
        }

        return (
            <picture
                className={this.props.className}
                alt={`Image of ${this.props.alt}`}
                style={style}
                data-testid="picture-component"
            ></picture>
        );
    }
}
export default Picture;
