import React, { useEffect, useState } from "react"
import { Form, Button, Col, Row} from "react-bootstrap";
import DoctorService from "../../services/DoctorService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import DoctorHeader from "./DoctorHeader";

const AddHistory = () => {
    const navigate = useNavigate();
    const[patientIdfk, setPatientIdfk] = useState('');
    const[treatmentType, setTreatmentType] = useState('');
    const[medicine, setMedicine] = useState('');
    const[treatmentCost, setTreatmentCost] = useState('');
    const[treatmentDate, setTreatmentDate] = useState('');
    const[errors, setErrors] = useState('');
    const pId = localStorage.getItem('pid');

    const handleSubmit =(e) => {
        e.preventDefault();
        const treatmentdetails = {treatmentType, medicine, treatmentCost, treatmentDate, patient:{patientId:pId}};
        const errors = validate({...treatmentdetails})
        if(Object.keys(errors).length === 0){
            DoctorService.addhistory(treatmentdetails)
            .then(response =>{
                console.log(pId);
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `Details added Successful.`,
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate('/ViewPatient');
                // localStorage.clear();
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
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                <h2>Add Patient Treatment Details</h2><br/>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PatientId</Form.Label>
                    <Form.Control
                        type="number" 
                        placeholder="Enter PatientId"
                        disabled
                        value={pId}
                    />
                    {/* {errors.name && <p style={{color: 'red'}}>{errors.name}</p>} */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Treatment Type</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Treatment type"
                        value={treatmentType}
                        onChange={(e) => setTreatmentType(e.target.value)} 
                    />
                    {errors.treatmentType && <p style={{color: 'red'}}>{errors.treatmentType}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Medicine</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter medicine"
                        value = {medicine}
                        onChange={(e) => setMedicine(e.target.value)}  
                    />
                    {errors.medicine && <p style={{color: 'red'}}>{errors.medicine}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Treatment cost</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Cost"
                        value ={treatmentCost}
                        onChange={(e) => setTreatmentCost(e.target.value)} 
                    />
                    {errors.treatmentCost && <p style={{color: 'red'}}>{errors.treatmentCost}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter date of Treatment</Form.Label>
                    <Form.Control 
                        type="date"     
                        placeholder="Enter date of Treatment"
                        value={treatmentDate}
                        onChange={(e) => setTreatmentDate(e.target.value)}  
                    />
                    {errors.treatmentDate && <p style={{color: 'red'}}>{errors.treatmentDate}</p>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Col>
                </Row>
            </Form>
        </>
    )
}

function validate({treatmentType, medicine, treatmentCost, treatmentDate}){
    let errors = {};
    if(!treatmentType){
        errors.treatmentType = 'Enter TreatmentType';
    }
    if(!medicine){
        errors.medicine = 'Enter medicine';
    }
    if(!treatmentCost){
        errors.treatmentCost = 'Enter TreatmentCost';
    }
    if(!treatmentDate){
        errors.treatmentDate = 'Enter Date';
    }
    return errors;
}

export default AddHistory;