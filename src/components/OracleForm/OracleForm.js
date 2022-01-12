import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OracleForm.css'
import { TextField, Grid, Autocomplete, RadioGroup, FormLabel, FormControlLabel, Radio, FormHelperText, InputUnstyled, BorderLinearProgress, Typography, Box } from '@mui/material';

export class OracleForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showResult: false,
            formObj: {
                email: '',
                password: '',
                rePassword: '',
                country: '',
                firstName: '',
                lastName: '',
                gender: '',
                jobTitle: '',
                workPhone: '',
                companyName: '',
                doorNo: '',
                street: '',
                city: '',
                state: '',
                pincode: '',
                selectedFile: null,
            },
            countries: ['India', 'UK', 'US'],
            states: ['Tamilnadu', 'Kerala', 'Andra'],
            // formIsValid: true,
            errors: {},
        }
    }
    handleChange = (e) => {
        const tempObj = this.state.formObj;
        tempObj[e.target.name] = e.target.value;

        this.setState({ formObj: tempObj })
        console.log(tempObj);
        this.handleFormValidationOnChange(e.target.name)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.onFileUpload();
        if (this.handleFormValidation()) {
            this.onFileUpload();
            this.setState({ showResult: true });
        }
    }

    handleBack = () => {
        this.setState({ showResult: false });
    }

    onFileChange = (e) => {
        this.setState({ selectedFile: e.target.files[0] });
    }

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
    }

    handleFormValidationOnChange = (field) => {
        let { formObj } = this.state;
        let errors = {};

        if (field === 'email' && (!formObj["email"] || typeof formObj["email"] === "undefined" || !formObj["email"].match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
            errors["email"] = "Please enter valid email";
        }
        if (field === 'firstName' && (!formObj["firstName"] || typeof formObj["firstName"] === "undefined" || !formObj["firstName"].match(/^[a-zA-Z ]+$/))) {
            errors["firstName"] = "Please enter valid name";
        }
        if (field === 'lastName' && (!formObj["lastName"] || typeof formObj["lastName"] === "undefined" || !formObj["lastName"].match(/^[a-zA-Z ]+$/))) {
            errors["lastName"] = "Please enter valid name";
        }
        if (field === 'gender' && (!formObj["gender"] || typeof formObj["gender"] === "undefined")) {
            errors["gender"] = "Please select valid option";
        }
        if (field === 'pincode' && (!formObj["pincode"] || typeof formObj["pincode"] === "undefined" || !formObj["pincode"].match(/^^[1-9][0-9]{5}$/))) {
            errors["pincode"] = "Please enter valid pincode";
        }
        if (field === 'password' && (!formObj["password"] || typeof formObj["password"] === "undefined")) {
            errors["password"] = "Please enter valid password";
        }
        if (field === 'rePassword' && (!formObj["rePassword"] || typeof formObj["rePassword"] === "undefined")) {
            errors["rePassword"] = "Please enter valid Password";
        }
        else if (field === 'rePassword' && (formObj["password"] !== formObj["rePassword"])) {
            errors["rePassword"] = "Passwords are not matches";
        }

        console.log('errors');
        console.log(errors);
        this.setState({ errors: errors });
    }

    handleFormValidation = () => {
        let { formObj } = this.state;
        let formIsValid = true;
        let errors = {};

        if (!formObj["email"] || typeof formObj["email"] === "undefined" || !formObj["email"].match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            formIsValid = false;
            errors["email"] = "Please enter valid email";
        }
        if (!formObj["firstName"] || typeof formObj["firstName"] === "undefined" || !formObj["firstName"].match(/^[a-zA-Z ]+$/)) {
            formIsValid = false;
            errors["firstName"] = "Please enter valid name";
        }
        if (!formObj["lastName"] || typeof formObj["lastName"] === "undefined" || !formObj["lastName"].match(/^[a-zA-Z ]+$/)) {
            formIsValid = false;
            errors["lastName"] = "Please enter valid name";
        }
        if (!formObj["gender"] || typeof formObj["gender"] === "undefined") {
            formIsValid = false;
            errors["gender"] = "Please select valid option";
        }
        if (!formObj["pincode"] || typeof formObj["pincode"] === "undefined" || !formObj["pincode"].match(/^^[1-9][0-9]{5}$/)) {
            formIsValid = false;
            errors["pincode"] = "Please enter valid pincode";
        }
        if (!formObj["password"] || typeof formObj["password"] === "undefined") {
            formIsValid = false;
            errors["password"] = "Please enter valid password";
        }
        if (!formObj["rePassword"] || typeof formObj["rePassword"] === "undefined") {
            formIsValid = false;
            errors["rePassword"] = "Please enter valid Password";
        }
        else if (formObj["password"] !== formObj["rePassword"]) {
            formIsValid = false;
            errors["rePassword"] = "Passwords are not matches";
        }

        console.log(errors);
        this.setState({ errors: errors });
        return formIsValid;
    }

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <p>Details:</p>
                    <p className='fileData'>File name: {this.state.selectedFile.name}</p>
                    <p className='fileData'>File type: {this.state.selectedFile.type}</p>
                </div >
            );
        }
        else {
            return (
                <div>
                    <p>Select profile image</p>
                </div>
            );
        }
    };

    render() {
        const { formObj } = this.state;
        const { errors } = this.state;
        return <div>
            {!this.state.showResult && <div>
                <div className='formHeading d-flex justify-content-center'>
                    <p>
                        Create Your Oracle Account
                    </p>
                </div>
                <div className='form d-flex justify-content-center'>
                    <Container fluid>
                        <Row>
                            <Col md lg sm xs={8} >
                                <Form onSubmit={this.handleSubmit} sm="2" className="justify-content-md-center">
                                    <Form.Group className="mb-3">
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <TextField fullWidth id="standard-basic email" label="Enter email" variant="standard" name="email" type="text" value={formObj.email} onChange={this.handleChange} helperText={errors.email} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic password" label="Password" variant="standard" type="password" name="password" value={formObj.password} onChange={this.handleChange} helperText={errors.password} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic rePassword" label="Retype password" variant="standard" type="password" name="rePassword" value={formObj.rePassword} onChange={this.handleChange} helperText={errors.rePassword} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic firstName" label="First Name" variant="standard" name="firstName" type="text" value={formObj.firstName} onChange={this.handleChange} helperText={errors.firstName} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic lastName" label="Last Name" variant="standard" name="lastName" type="text" value={formObj.lastName} onChange={this.handleChange} helperText={errors.lastName} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormLabel component="legend">Gender</FormLabel>
                                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" name="gender" checked={this.state.formObj['gender'] === 'male'} onChange={this.handleChange} />
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" name="gender" checked={this.state.formObj['gender'] === 'female'} onChange={this.handleChange} />
                                                    <FormHelperText>{errors.gender}</FormHelperText>
                                                </RadioGroup>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic workPhone" label="Work Phone" variant="standard" name="workPhone" type="number" value={formObj.workPhone} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic companyName" label="Company name" variant="standard" name="companyName" type="text" value={formObj.companyName} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic jobTitle" label="Job Title" variant="standard" name="jobTitle" type="text" value={formObj.jobTitle} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic doorNo" label="Door No." variant="standard" name="doorNo" type="text" value={formObj.doorNo} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic street" label="Street Name" variant="standard" name="street" type="text" value={formObj.street} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Autocomplete
                                                    id="standard-basic country"
                                                    options={this.state.countries}
                                                    renderInput={(params) => <TextField {...params} label="Country" fullWidth id="standard-basic" name="country" value={params} onChange={this.handleChange} />} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Autocomplete
                                                    id="standard-basic state"
                                                    options={this.state.states}
                                                    renderInput={(params) => <TextField {...params} label="State" fullWidth id="standard-basic" name="state" value={params} onChange={this.handleChange} />} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic city" label="City" variant="standard" name="city" type="text" value={formObj.city} onChange={this.handleChange} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField fullWidth id="standard-basic pincode" label="Pincode" variant="standard" name="pincode" type="text" value={formObj.pincode} onChange={this.handleChange} helperText={errors.pincode} />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <InputUnstyled type='file' onChange={this.onFileChange} />
                                                {this.fileData()}
                                            </Grid>

                                        </Grid>
                                    </Form.Group>
                                    <div className='d-flex justify-content-end'>
                                        <Button type="submit" className='submitButton' >Creat Account</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>}

            {this.state.showResult &&
                <div >
                    <div className='formHeading d-flex justify-content-center'>
                        <p>
                            Account Details
                        </p>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <Button color="secondary" className='backButton' onClick={this.handleBack} >Back</Button>
                    </div>
                    <div className='infoTable'>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Key</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.state.formObj).map((i, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{i}</td>
                                        <td>{this.state.formObj[i]}</td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>}
        </div >
    }
}

export default OracleForm
