import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class OracleForm extends Component {

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
        tempObj[e.target.name] = e.target.value;

        this.setState({ formObj: tempObj })
        console.log(tempObj);
    }

    handleSubmit = (e) => {
        this.setState({ showResult: true });
        e.preventDefault();
    }

    render() {
        const { formObj } = this.state;
        return <div>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit} sm="2" className="justify-content-md-center">
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" value={formObj.email} placeholder="Enter email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="Password" value={formObj.password} placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Retype password:</Form.Label>
                                <Form.Control name="rePassword" type="Password" value={formObj.rePassword} placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select aria-label="Default select example" name="country" value={formObj.country} onChange={this.handleChange}>
                                    <option value="india">India</option>
                                    <option value="UK">UK</option>
                                    <option value="US">US</option>
                                    <option value="france">France</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="firstName" type="text" value={formObj.firstName} placeholder="First Name" onChange={this.handleChange} />
                                <Form.Control name="lastName" type="text" value={formObj.lastName} placeholder="Last Name" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Check name="gender" type="radio" value='male' label="male" checked={this.state.formObj['gender'] === 'male'} onChange={this.handleChange} />
                                <Form.Check name="gender" type="radio" label="female" value='female' checked={this.state.formObj['gender'] === 'female'} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control name="jobTitle" type="text" value={formObj.jobTitle} placeholder="Job Title" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Work Phone</Form.Label>
                                <Form.Control name="workPhone" type="text" value={formObj.workPhone} placeholder="Work Phone" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows="2" name="address" type="text" value={formObj.address} placeholder="Address" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" type="text" value={formObj.city} placeholder="City" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select aria-label="Default select example" name="state" value={formObj.state} onChange={this.handleChange}>
                                    <option value="kerala">Kerala</option>
                                    <option value="tamilnadu">Tamil nadu</option>
                                    <option value="kernadaga">Kernadaga</option>
                                    <option value="andhra">Andhra</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>ZIP/Postal Code</Form.Label>
                                <Form.Control name="zipcode" type="text" value={formObj.zipcode} placeholder="Zipcode" onChange={this.handleChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Creat Account
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>


            {this.state.showResult &&
                <div >
                    {Object.keys(this.state.formObj).map((i, index) => {
                        return <div key={index}>{i}:{this.state.formObj[i]}</div>
                    })}
                </div>}
        </div >
    }

}

export default OracleForm
