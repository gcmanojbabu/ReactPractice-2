import { Component } from "react";

export default class NewComponent1 extends Component {
    render() {
        return <div>
            {this.props.passValue}
        </div>
    }
}