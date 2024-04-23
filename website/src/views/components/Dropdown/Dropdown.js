import React, { Component } from "react";

class Dropdown extends Component {
    render() {
        if (this.props.children !== null && this.props.children !== undefined) {
            return (
                <ul className={`dropdown ${this.props.className}`} id={this.props.id} data-testid="dropdown-component">
                    <button className={`btn-secondary dropdown-toggle`} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.buttonText}
                    </button>
                    <div className="dropdown-menu" aria-labelledby={this.props.id}>
                        {this.props.children}
                    </div>
                </ul>
            );
        }
    }
}
export default Dropdown;
