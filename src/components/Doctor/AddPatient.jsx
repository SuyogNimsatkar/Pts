import React, {useEffect, useState} from "react";
import { Form, Button, Col, Row} from "react-bootstrap";
import DoctorService from "../../services/DoctorService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DoctorHeader from "./DoctorHeader";

const AddPatient =() => {
    const navigate = useNavigate();
    const[patientName, setPatientName] = useState('');
    const[patientMobile, setPatientMobile] = useState('');
    const[patientAddress, setPatientAddress] = useState('');
    const[email, setEmail] = useState('');
    const[patientDob, setPatientDob] = useState('');
    const[patientProblem, setPatientProblem] = useState('');
    const[arrivalDate, setArrivalDate] = useState('');
    const[errors, setErrors] = useState('');
    const dId = localStorage.getItem('DoctorId');

    const handleSubmit= (e) =>{
        e.preventDefault();
        const details = {patientName, patientMobile, patientAddress, email, patientDob, patientProblem, arrivalDate, doctor:{doctorId:dId}};
        const errors = validate({...details});
        if(Object.keys(errors).length === 0){
            console.log(JSON.stringify(details));
            DoctorService.addpatient(details)
            .then(response =>{
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `Details added Successful.`,
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate('/DoctorDashboard');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: `Details already available`,
                    showConfirmButton: false,
                    timer: 3000
                });
                console.log("error", error);
            })

        }
        else{
            setErrors(errors);
        }
    }


    return(
        <>
            <DoctorHeader/>
            <Form className="justify-content-md-center">
                <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                <h2>Add Patient Details</h2><br/>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter patientName"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)} 
                    />
                    {errors.patientName && <p style={{color: 'red'}}>{errors.patientName}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>patientMobile No.</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter patientMobile no."
                        value = {patientMobile}
                        onChange={(e) => setPatientMobile(e.target.value)}  
                    />
                    {errors.patientMobile && <p style={{color: 'red'}}>{errors.patientMobile}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>patientAddress</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter patientAddress"
                        value ={patientAddress}
                        onChange={(e) => setPatientAddress(e.target.value)} 
                    />
                    {errors.patientAddress && <p style={{color: 'red'}}>{errors.patientAddress}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email"
                        value ={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control 
                        type="date"     
                        placeholder="Enter date of birth"
                        value={patientDob}
                        onChange={(e) => setPatientDob(e.target.value)}  
                    />
                    {errors.patientDob && <p style={{color: 'red'}}>{errors.patientDob}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>patientProblem</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter patient's patientProblem"
                        value={patientProblem}
                        onChange={(e) => setPatientProblem(e.target.value)}  
                    />
                    {errors.patientProblem && <p style={{color: 'red'}}>{errors.patientProblem}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Arrival Date</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="Enter patient's arrival date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}  
                    />
                    {errors.arrivalDate && <p style={{color: 'red'}}>{errors.arrivalDate}</p>}
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
                </Col>
                </Row>
            </Form>
        </>
    );

    function validate({patientName, patientMobile, patientAddress, email, patientDob, patientProblem, arrivalDate }){
        let errors = {};
        let phoneno = /^\d{10}$/;
        if(!patientName?.trim()){
            errors.patientName = 'Name Required';
        }
        if(!patientMobile){
            errors.patientMobile = "patientMobile no. Required";
        }
        // if(!patientMobile.value.match(phoneno)){
        //     errors.patientMobile = "Invalid Mobile Number";
        // }
        if(patientMobile.length != 10){
            errors.patientMobile = "Invalid Mobile Number";
        }
        if(!patientAddress){
            errors.patientAddress = "Please provide patientAddress";
        }
        if(!email){
            errors.email = "Please provide your email";
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
         }
        if(!patientDob){
            errors.patientDob = "Please enter your Date of Birth";
        }
        if(!patientProblem){
            errors.patientProblem = "Tell your patientProblem";
        }
        if(!arrivalDate){
            errors.arrivalDate = 'Enter your admission Date';
        }
        return errors;
    }
}

export default AddPatient;