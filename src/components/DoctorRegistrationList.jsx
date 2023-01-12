import React, { Component } from 'react'
import adminService from '../services/AdminService'
import AdminHeader from './AdminHeader'

class DoctorRegistrationList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                doctors: []
         }
        // this.addApplicant = this.addApplicant.bind(this);
        //  this.editApplicant = this.editApplicant.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
    }

    deleteDoctor(doctorId){
        adminService.deleteDoctor(doctorId).then( res => {
            this.setState({doctors: this.state.doctors.filter(doctor => doctor.doctorId !==doctorId)});
        });
    }
    updateDoctorStatus(doctorId,status){
        adminService.updatedoctorStatus(doctorId,status).then( res => {
            this.setState({doctor: this.state.doctors.filter(applicant => applicant.doctorId !==doctorId)});
        });
    }
    // viewApplicant(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(id){
    //     this.props.history.push(`/add-employee/${id}`);
    // }

    // componentDidMount(){
    //     applicantService.getApplicants().then((res) => {
    //         this.setState({ applicants: res.data});
    //     });
    // }
    componentDidMount(){
        adminService.getDoctorByStatus("Pending").then((res) => {
            this.setState({ doctors: res.data});
        });
    }

    // addApplicant(){
    //     this.props.history.push('/add-applicant/_add');
    // }
    render() {
        return (
            <div>
                
                <AdminHeader />
                 <h2 className="text-center">Doctor Registeration List</h2>
                 {/* <div className = "row"> */}
                    {/* <button className="btn btn-primary" onClick={this.addApplicant}> Add Applicant</button> */}
                 {/* </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Doctor Id</th>
                                   <th> Doctor Name</th>
                                    <th> Expertise</th>
                                    <th> Doctor Email</th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctors.map(
                                        doctor => 
                                        <tr key = {doctor.doctor_id}>
                                            <td> {doctor.doctorId} </td>
                                             <td> {doctor.doctorName} </td>   
                                             <td> {doctor.expertise}</td>
                                             <td> {doctor.doctorEmail}</td>
                                             
                                             <td>
                                                 {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.updateDoctorStatus(doctor.doctorId,"confirmed")} className="btn btn-info">Confirm</button>                                             
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDoctor(doctor.doctorId)} className="btn btn-danger">Decline</button>
                                                 
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(applicant.applicantId)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default DoctorRegistrationList