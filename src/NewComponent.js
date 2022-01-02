import { Component } from "react";
import NewComponent1 from "./NewComponent2";


export default class NewComponent extends Component {
    render() {
        console.log(this.props)
        return <div>
            <NewComponent1 passValue={this.props.myValue}></NewComponent1>
        </div>
    }
}

