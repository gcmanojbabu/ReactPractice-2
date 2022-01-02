import React, { Component } from 'react';
import NewComponent from './NewComponent';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formObj: {
        email: 'email',
        password: 'password',
        rePassword: 'rePassword',
        country: 'india',
      }
    }
  }

  handleChange = (e) => {
    const tempObj = this.state.formObj;

    tempObj.email = e.target.name === 'emailField' ? e.target.value : this.state.formObj['email'];
    tempObj.password = e.target.name === 'passwordField' ? e.target.value : this.state.formObj['password'];
    tempObj.rePassword = e.target.name === 'rePasswordField' ? e.target.value : this.state.formObj['rePassword'];
    tempObj.country = e.target.name === 'countryField' ? e.target.value : this.state.formObj['country'];

    this.setState({ formObj: tempObj })
    console.log(tempObj);
  }

  handleSubmit(event) {
    // alert(this.state.formObj['email']);
    alert('hello');
  }

  render() {
    return <div>
      < form onSubmit={this.handleSubmit} >
        <label>Email address:
          <input name="emailField" type="text" value={this.state.formObj['email']} onChange={this.handleChange} />
        </label>
        <label>Password:
          <input name="passwordField" type="text" value={this.state.formObj['password']} onChange={this.handleChange} />
        </label>
        <label>Retype password:
          <input name="rePasswordField" type="text" value={this.state.formObj['rePassword']} onChange={this.handleChange} />
        </label>
        <label>Country:
          <select name="countryField" value={this.state.formObj['country']} onChange={this.handleChange}>
            <option value="india">India</option>
            <option value="UK">UK</option>
            <option value="US">US</option>
            <option value="france">France</option>
          </select>
        </label>

        < input type="submit" value="Creat Account" />
      </form >
      {/* {this.state.formObj['password']} */}


      <div>
        {Object.keys(this.state.formObj).map((i, index) => {
          return <div>{i}</div>
        })}
      </div>
    </div >
  }
}





// export default class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       appName: 'Test App',
//       appName1: 'Test App1',
//       myArray: ['a', 'b', 'c'],
//       stringval: "",
//       myObj: {
//         Name: 'Manoj',
//         Age: '22',
//         Location: 'Trichy',
//         Country: 'India'
//       }
//     }
//     // this.printfn = this.printfn.bind(this);
//   }

//   // componentDidMount = () => {
//   //   setInterval(() => {
//   //     console.log("object");
//   //     this.setState({
//   //       stringval: ""
//   //     })
//   //   }, 3 * 1000)
//   // }

//   inputVal = (e) => {
//     this.setState({
//       stringval: e.target.value
//     })
//   }

//   printfn = () => {
//     const tempArray = this.state.myArray;
//     tempArray.push('a')
//     this.setState({ myArray: tempArray });
//   }
//   render() {
//     return <div>
//       {/* {this.state.myArray.map((item, index) => {
//         // return <div key={index}>{i}</div>
//         return <NewComponent key={index} myValue={item}></NewComponent>
//       })}
//       <button onClick={this.printfn}>Click</button> */}
//       {/* {this.state.appName} */}
//       {/* <button onClick={ () => {
//         this.setState({
//           appName: 'Lean App'
//         })
//       }}>Click1</button> */}
//       {/* {this.state.appName1} */}
//       {/* <input value={this.state.stringval} onChange={this.inputVal}></input>
//       {this.state.stringval} */}

//       <br></br>
//       <Table bordered>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Key</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         {Object.keys(this.state.myObj).map((i, index) => {
//           return <tbody>
//             <tr>
//               <td>{index + 1}</td>
//               <td>{i}</td>
//               <td>{this.state.myObj[i]}</td>
//             </tr>
//           </tbody>
//         })}
//       </Table>

//     </div>
//   }

// }
