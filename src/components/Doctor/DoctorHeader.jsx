import React, {Component} from 'react'


class DoctorHeader extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="" style={{marginLeft: "10px"}} className="navbar-brand" onClick={() => {window.open("/doctordashboard", "_self");}}>Doctor DashBoard</a>
                        </div>

                        <button style={{marginLeft: "400px"}} onClick={() => {window.open("/DoctorProfile", "_self");}} className="btn btn-dark">Profile</button>
                        <button className="btn btn-dark" onClick={() => {window.open("/addpatient", "_self");}}>Add Patient</button>
                        <button className="btn btn-dark" onClick={() => { window.open("/viewpatient", "_self");}}>View Patient</button>
                        <button className="btn btn-dark" onClick={() => { window.open("/viewmypatients", "_self");}}>View My Patients</button>
                        {/* <button className="btn btn-dark" onClick={() => { window.open("/applicant", "_self");}}>Patient's List</button> */}
                        {/* <button className="btn btn-dark" onClick={() => {localStorage.removeItem('AdmissionCommiteeId'); localStorage.removeItem('AdmissionCommiteepassword'); window.open("/home", "_self");}}>logout</button> */}
                        <button className="btn btn-dark" onClick={() => { window.open("/home", "_self");}}>logout</button>
                    </nav>
                </header>
            </div>
        )
    }

}

export default DoctorHeader;