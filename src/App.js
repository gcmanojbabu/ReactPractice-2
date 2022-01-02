import React, { Component } from 'react';
import NewComponent from './NewComponent';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      appName: 'Test App',
      appName1: 'Test App1',
      myArray: ['a', 'b', 'c'],
      stringval: "",
      myObj: {
        Name: 'Manoj',
        Age: '22',
        Location: 'Trichy',
        Country: 'India'
      }
    }
    // this.printfn = this.printfn.bind(this);
  }

  // componentDidMount = () => {
  //   setInterval(() => {
  //     console.log("object");
  //     this.setState({
  //       stringval: ""
  //     })
  //   }, 3 * 1000)
  // }

  inputVal = (e) => {
    this.setState({
      stringval: e.target.value
    })
  }

  printfn = () => {
    const tempArray = this.state.myArray;
    tempArray.push('a')
    this.setState({ myArray: tempArray });
  }
  render() {
    return <div>
      {this.state.myArray.map((item, index) => {
        // return <div key={index}>{i}</div>
        return <NewComponent key={index} myValue={item}></NewComponent>
      })}
      <button onClick={this.printfn}>Click</button>
      {/* {this.state.appName} */}
      {/* <button onClick={() => {
        this.setState({
          appName: 'Lean App'
        })
      }}>Click1</button> */}

      {/* {this.state.appName1} */}

      <input value={this.state.stringval} onChange={this.inputVal}></input>
      {this.state.stringval}

      <br></br>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        {Object.keys(this.state.myObj).map((i, index) => {
          return <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{i}</td>
              <td>{this.state.myObj[i]}</td>
            </tr>
          </tbody>
        })}
      </Table>
    </div>
  }

}
