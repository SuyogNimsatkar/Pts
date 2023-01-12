import React, { Component } from 'react'
// import {Button} from "reactstrap";


class AdminHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href=" " style={{marginLeft: "10px"}} className="navbar-brand">AdminDashBoard</a></div>
                    
                    {/* <Button onclick> HOME </Button> */}
                    <div>

                    <button style={{marginLeft: "400px"}} onClick={() => {window.open("/AdminProfile", "_self");}} className="btn btn-dark">Profile</button>
                     <button className="btn btn-dark" onClick={() => {window.open("/DoctorRegistrationList", "_self");}}>Doctor Registration List</button>
                     <button className="btn btn-dark" onClick={() => { window.open("/DoctorList", "_self");}}>Doctor's List</button>
                     {/* <button className="btn btn-dark" onClick={() => { window.open("/applicant", "_self");}}>Patient's List</button> */}
                     {/* <button className="btn btn-dark" onClick={() => {localStorage.removeItem('AdmissionCommiteeId'); localStorage.removeItem('AdmissionCommiteepassword'); window.open("/home", "_self");}}>logout</button> */}
                    <button className="btn btn-dark" onClick={() => { window.open("/home", "_self");}}>logout</button>
                  
                        </div>
                    </nav>
                </header> 
            </div>
        )
    } 
}

export default AdminHeader