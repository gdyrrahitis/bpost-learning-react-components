import React from "react";
import ReactDom from "react-dom";

export class App extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.state = { value: "" };
        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
        this.setState({ value: event.target.value });
    }

    SayHi(props) {
        if (!props.value || props.value.length < 3) {
            return <h4 className="text-danger">
                Please enter a name so I can greet you properly!
            </h4>;
        }

        return <h4>{props.value} says hi!</h4>;
    }

    render() {
        return <div className="container">
            <div className="jumbotron">
                <h2>{this.props.message}</h2>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={this.state.value}
                            onChange={this.onNameChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <this.SayHi value={this.state.value} />
                </div>
            </div>
        </div>;
    }
}