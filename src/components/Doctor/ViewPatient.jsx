import React, {useEffect, useState}from "react"
import { Button, Col, Row } from "react-bootstrap";
import DoctorService from "../../services/DoctorService";
import { Card, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import DoctorHeader from "./DoctorHeader";

const ViewPatient = () => {
    const[patientId, setPatientId] = useState('');
    const[data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const showPatient = (e) => {
        e.preventDefault();
        console.log(patientId);
        localStorage.setItem('pid', patientId);
        DoctorService.getpatientbyid(patientId)
            .then(response => {
                
                console.log("displaying data", response.data);
                setData(response.data);
                setIsShown(current => !current);
            })
            .catch(error => {
                console.log("Response not Found", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: `Patient Does Not Exists`,
                    showConfirmButton: false,
                    timer: 3000
                });
            })
        
    }

    return(
        <>
            <DoctorHeader/>
            <div className="">
                <div className="container">
                <div className="details p-5 m-5" style={{boxShadow:'0px 0px 10px #aaa'}}>
                    <Row className="justify-content-md-center">
                    <Col xs={12} md={3}>
                    <h3>Enter Patient Id</h3>
                    <input
                        type="number"
                        placeholder="Enter Patient Id"
                        value = {patientId}
                        onChange = {(e) => setPatientId(e.target.value)}
                    />
                    <Button variant="primary" type="submit" onClick={showPatient}>
                        Show details
                    </Button>
                    <br/>

                    {isShown && (
                    <Card style={{ width: '28rem' }} key={data.patientId}>
                        <Card.Header>Patient Id :  {data.patientId}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Name : {data.patientName}</ListGroup.Item>
                            <ListGroup.Item>Email: {data.email}</ListGroup.Item>
                            <ListGroup.Item>Mobile: {data.patientMobile}</ListGroup.Item>
                            <ListGroup.Item>Date of Birth: {data.patientDob}</ListGroup.Item>
                            <ListGroup.Item>Arrival Date: {data.arrivalDate}</ListGroup.Item>
                            <ListGroup.Item>Address: {data.patientAddress}</ListGroup.Item>
                            <ListGroup.Item>Problem/Disease: {data.patientProblem}</ListGroup.Item>
                        </ListGroup>
                        <br/>
                        <Button variant="primary" type="submit" onClick={() => {window.open("/addhistory", "_self");}}>
                            Add Treatment Details
                        </Button>
                        <br/>
                        <Button variant="primary" type="submit" onClick={() => {window.open("/ViewTreatmentHistory", "_self");}}>
                            View Treatment History
                        </Button>
                    </Card>

                    
                    )}
                    </Col>
                    </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewPatient;