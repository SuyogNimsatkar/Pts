import React, { Component, useEffect, useState } from "react";
import { render } from "@testing-library/react"
import DoctorHeader from "./DoctorHeader";
import { Card, ListGroup } from "react-bootstrap";
import DoctorService from "../../services/DoctorService";
import AdminService from "../../services/AdminService";

const DoctorProfile = () => {
    const [docData, setDocData] = useState([]);
    const dId = localStorage.getItem('DoctorId');
    // const doctorId = 1;
    useEffect(() => {
        AdminService.viewDoctor(dId)
            .then(response => {
                console.log(dId);
                setDocData(response.data);
            })
            .catch(error => {
                console.log("NO Doctor data");
            })
    })
    return (
        <div>
            <DoctorHeader />
            <Card style={{ width: '28rem' }} key={docData.patientId}>
                <Card.Header>Doctor Id :  {docData.doctorId}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Name : {docData.doctorName}</ListGroup.Item>
                    <ListGroup.Item>Email: {docData.doctorEmail}</ListGroup.Item>
                    <ListGroup.Item>Expertise: {docData.expertise}</ListGroup.Item>
                    <ListGroup.Item>Qualification: {docData.doctorQualification}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default DoctorProfile;