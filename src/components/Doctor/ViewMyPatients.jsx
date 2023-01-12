import React, { useEffect, useState } from "react"
import DoctorService from "../../services/DoctorService";
import DoctorHeader from "./DoctorHeader";

const ViewMyPatients = () =>{
    const [myPatients, setMyPatients] = useState([]);
    const paid = localStorage.getItem('DoctorId');

    useEffect(() =>{
        DoctorService.getpatientbydoctorid(paid)
        .then(response => {
            console.log("Displaying my patients", response.data);
            setMyPatients(response.data);
        })
        .catch(error =>{
            console.log("error", error);
        });
    })

    return(
        <div>
            <DoctorHeader/>
            <h2 className="text-center">My Patients</h2>
                 {/* <div className = "row"> */}
                    {/* <button className="btn btn-primary" onClick={this.addApplicant}> Add Applicant</button> */}
                 {/* </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Patient Id</th>
                                   <th> Patient Name</th>
                                    <th> Patient Address</th>
                                    <th> Patient Mobile</th>
                                    <th> Email </th>
                                    <th> DOB </th>
                                    <th> Problem </th>
                                    <th> Arrival Date </th>
                                    <th> ........ </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myPatients.map(
                                        patient => 
                                        <tr key = {patient.patientId}>
                                            <td> {patient.patientId} </td>
                                             <td> {patient.patientName} </td>   
                                             <td> {patient.patientAddress}</td>
                                             <td> {patient.patientMobile}</td>
                                             <td> {patient.email}</td>
                                             <td> {patient.patientdob}</td>
                                             <td> {patient.patientProblem}</td>
                                             <td> {patient.arrivaldate}</td>
                                             <td>
                                                 {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info">View History</button>
                                                 
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(applicant.applicantId)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    );
}

export default ViewMyPatients;