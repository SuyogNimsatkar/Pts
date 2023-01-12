import React, { Component } from "react";
import { render } from "@testing-library/react"
import DoctorHeader from "./DoctorHeader";

class DoctorDashboard extends Component{
    render(){
        return(
            <div>
                <DoctorHeader/>
                <div className="center">
                    <h1> Doctor DashBoard</h1>
                </div>
            </div>
        )
    }

}

export default DoctorDashboard;