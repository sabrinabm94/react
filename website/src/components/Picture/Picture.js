import React, { Component } from "react";

class Picture extends Component {
    render() {
        if (this.props.url) {
            let style = {
                backgroundImage: `url(${this.props.url})`,
            };

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
}
export default Picture;
