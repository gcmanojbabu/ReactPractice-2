import React, { Component } from 'react';
import NewComponent from './NewComponent';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showResult: false,
      formObj: {
        email: '',
        password: '',
        rePassword: '',
        country: 'india',
        firstName: '',
        lastName: '',
        gender: '',
        jobTitle: '',
        workPhone: '',
        companyName: '',
        address: '',
        city: '',
        state: 'tamilnadu',
        zipcode: '',
      }
    }
  }

  handleChange = (e) => {
    const tempObj = this.state.formObj;

    tempObj.email = e.target.name === 'emailField' ? e.target.value : this.state.formObj['email'];
    tempObj.password = e.target.name === 'passwordField' ? e.target.value : this.state.formObj['password'];
    tempObj.rePassword = e.target.name === 'rePasswordField' ? e.target.value : this.state.formObj['rePassword'];
    tempObj.country = e.target.name === 'countryField' ? e.target.value : this.state.formObj['country'];
    tempObj.firstName = e.target.name === 'firstNameField' ? e.target.value : this.state.formObj['firstName'];
    tempObj.lastName = e.target.name === 'lastNameField' ? e.target.value : this.state.formObj['lastName'];
    tempObj.gender = e.target.name === 'genderMaleField' ? 'male' : tempObj.gender = e.target.name === 'genderFemaleField' ? 'female' : this.state.formObj['gender'];
    tempObj.jobTitle = e.target.name === 'jobTitleField' ? e.target.value : this.state.formObj['jobTitle'];
    tempObj.workPhone = e.target.name === 'workPhoneField' ? e.target.value : this.state.formObj['workPhone'];
    tempObj.companyName = e.target.name === 'companyNameField' ? e.target.value : this.state.formObj['companyName'];
    tempObj.address = e.target.name === 'addressField' ? e.target.value : this.state.formObj['address'];
    tempObj.city = e.target.name === 'cityField' ? e.target.value : this.state.formObj['city'];
    tempObj.state = e.target.name === 'stateField' ? e.target.value : this.state.formObj['state'];
    tempObj.zipcode = e.target.name === 'zipcodeField' ? e.target.value : this.state.formObj['zipcode'];

    this.setState({ formObj: tempObj })
    console.log(tempObj);
  }

  handleSubmit = (e) => {
    this.setState({ showResult: true });
    e.preventDefault();
  }

  render() {
    return <div>
      {/* < form onSubmit={this.handleSubmit} >
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
        <label>Name:
          <input placeholder="First Name" name="firstNameField" type="text" value={this.state.formObj['firstName']} onChange={this.handleChange} />
          <input placeholder="Last Name" name="lastNameField" type="text" value={this.state.formObj['lastName']} onChange={this.handleChange} />
        </label>
        <label className="radio">Gender:
          <input name="genderMaleField" type="radio" checked={this.state.formObj['gender'] == 'male'} onChange={this.handleChange} />
          <span>male</span>
          <input name="genderFemaleField" type="radio" checked={this.state.formObj['gender'] == 'female'} onChange={this.handleChange} />
          <span>female</span>
        </label>
        <label>Job Title:
          <input name="jobTitleField" type="text" value={this.state.formObj['jobTitle']} onChange={this.handleChange} />
        </label>
        <label>Work Phone:
          <input name="workPhoneField" type="text" value={this.state.formObj['workPhone']} onChange={this.handleChange} />
        </label>
        <label>Company Name:
          <input name="companyNameField" type="text" value={this.state.formObj['companyName']} onChange={this.handleChange} />
        </label>
        <label>Address:
          <textarea name="addressField" type="text" value={this.state.formObj['address']} onChange={this.handleChange} />
        </label>
        <label>City:
          <input name="cityField" type="text" value={this.state.formObj['city']} onChange={this.handleChange} />
        </label>
        <label>State/Province:
          <select name="stateField" value={this.state.formObj['state']} onChange={this.handleChange}>
            <option value="kerala">Kerala</option>
            <option value="tamilnadu">Tamil nadu</option>
            <option value="kernadaga">Kernadaga</option>
            <option value="andhra">Andhra</option>
          </select>
        </label>
        <label>ZIP/Postal Code:
          <input name="zipcodeField" type="text" value={this.state.formObj['zipcode']} onChange={this.handleChange} />
        </label>

        < input type="submit" value="Creat Account" />
      </form >
      <br></br> */}
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit} sm="2" className="justify-content-md-center">
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="emailField" type="email" value={this.state.formObj['email']} placeholder="Enter email" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name="passwordField" type="Password" value={this.state.formObj['password']} placeholder="Password" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Retype password:</Form.Label>
                <Form.Control name="rePasswordField" type="Password" value={this.state.formObj['rePassword']} placeholder="Password" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example" name="countryField" value={this.state.formObj['country']} onChange={this.handleChange}>
                  <option value="india">India</option>
                  <option value="UK">UK</option>
                  <option value="US">US</option>
                  <option value="france">France</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name="firstNameField" type="text" value={this.state.formObj['firstName']} placeholder="First Name" onChange={this.handleChange} />
                <Form.Control name="lastNameField" type="text" value={this.state.formObj['lastName']} placeholder="Last Name" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Check name="genderMaleField" type="radio" label="male" checked={this.state.formObj['gender'] == 'male'} onChange={this.handleChange} />
                <Form.Check name="genderFemaleField" type="radio" label="female" checked={this.state.formObj['gender'] == 'female'} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control name="jobTitleField" type="text" value={this.state.formObj['jobTitle']} placeholder="Job Title" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Work Phone</Form.Label>
                <Form.Control name="workPhoneField" type="text" value={this.state.formObj['workPhone']} placeholder="Work Phone" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows="2" name="addressField" type="text" value={this.state.formObj['address']} placeholder="Address" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control name="cityField" type="text" value={this.state.formObj['city']} placeholder="City" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example" name="stateField" value={this.state.formObj['state']} onChange={this.handleChange}>
                  <option value="kerala">Kerala</option>
                  <option value="tamilnadu">Tamil nadu</option>
                  <option value="kernadaga">Kernadaga</option>
                  <option value="andhra">Andhra</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ZIP/Postal Code</Form.Label>
                <Form.Control name="zipcodeField" type="text" value={this.state.formObj['zipcode']} placeholder="Zipcode" onChange={this.handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Creat Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>


      <br></br>
      {this.state.showResult &&
        <div >
          {Object.keys(this.state.formObj).map((i, index) => {
            return <div key={index}>{i}:{this.state.formObj[i]}</div>
          })}
        </div>}
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
