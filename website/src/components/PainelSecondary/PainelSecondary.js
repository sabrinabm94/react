import { React, Component } from "react";

//components
import Button from "../Button/Button";
import Text from "../Text/Text";

class PainelSecondary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ text: data })
        }
    }

    render() {
        return (
            <div className="panel panel-default text-center" data-testid="painelsecondary-component">
                <div className="panel-heading">
                    <h2 className="title">{this.props.title}</h2>
                </div>
                <div className="panel-body">
                    <Text className="content" text={this.props.description} parentCallback={this.handleBreaklines} />
                </div>
                <div className="panel-footer">
                    <h3 className="subtitle">{this.props.value}</h3>
                    <a className="link" href={this.props.link}>
                        <Button
                            text="Sign Up"
                            type="submit"
                            disabled={true}
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default PainelSecondary;
