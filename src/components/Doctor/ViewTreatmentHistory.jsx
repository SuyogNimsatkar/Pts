import React, { useEffect, useState } from "react"
import { Card, ListGroup } from "react-bootstrap";
import DoctorService from "../../services/DoctorService";
import DoctorHeader from "./DoctorHeader";


const ViewTreatmentHistory = () => {
    const [history, setHistory] = useState([]);
    const pId = localStorage.getItem('pid');

    useEffect (() => {
        DoctorService.gethistorybypatientid(pId)
        .then(response =>{
            console.log("Displaying Treatments Details", response.data);
            setHistory(response.data);
            localStorage.clear();
        })
        .catch(error => {
            console.log('Treatment Details not found', error);
        })
    },[])

    return(
        <div className="">
            <DoctorHeader/>
            <div className="container">
                <div className="details p-5 m-5" style={{boxShadow:'0px 0px 10px #aaa'}}>
                {
                    history && history.map(response => (
                        <Card style={{ width: '18rem' }} key={response.treatmentId}>
                            <div className="container heading p-3">
                                <Card.Header>Treatment Id : {response.treatmentId}</Card.Header>
                            </div>

                            <div className="container" style={{width:'fit-content'}}>
                                <table className="table text-left">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Treatment Type : {response.treatmentType}</ListGroup.Item>
                                        <ListGroup.Item>Treatment Date: {response.treatmentDate}</ListGroup.Item>
                                        <ListGroup.Item>Treatment Cost: {response.treatmentCost}</ListGroup.Item>
                                        <ListGroup.Item>Medicine: {response.medicine}</ListGroup.Item>
                                    </ListGroup>
                                </table>
                            </div>
                            <br/>
                        </Card>
                    ))
                }
                </div>
            </div>
            
        </div>
        
    )
}

export default ViewTreatmentHistory;