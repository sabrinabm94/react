import React, { Component } from "react";

class Input extends Component {
    render() {
        if (this.props.name) {
            return (
                <div className="form-group">
                    <label htmlFor={this.props.name}>{this.props.name}</label>
                    <input
                        type={this.props.type}
                        className={this.props.className}
                        name={this.props.name}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                        data-testid="input-component"
                    />
                </div>
            );
        } else {
            return (
                <div className="form-group">
                    <input
                        type={this.props.type}
                        className={this.props.className}
                        name={this.props.name}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                        data-testid="input-component"
                    />
                </div>
            );
        }
    }
}
export default Input;
