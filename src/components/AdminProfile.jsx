import React, { Component } from 'react'
import AdminHeader from './AdminHeader'


class AdminProfile extends Component {
    
    render() {
        return (
            <div>
                <AdminHeader />
                <div class="center">
                {/* <h1>Welcome {localStorage.getItem("AdmissionCommiteepassword")} */}
               <h1>WELCOME ADMIN
                </h1></div>
                </div>


        )
    }
}

export default AdminProfile;