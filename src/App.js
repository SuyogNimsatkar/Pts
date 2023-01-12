import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AdminProfile from './components/AdminProfile';
import DoctorRegistrationList from './components/DoctorRegistrationList';
import DoctorProfile from "./components/Doctor/DoctorProfile";
import DoctorDashboard from "./components/Doctor/DoctorDashBoard";
import AddPatient from "./components/Doctor/AddPatient";
import ViewTreatmentHistory from "./components/Doctor/ViewTreatmentHistory";
import ViewPatient from "./components/Doctor/ViewPatient";
import AddHistory from "./components/Doctor/AddHistory"
import ViewMyPatients from "./components/Doctor/ViewMyPatients";
import HomeComponent from "./components/HomeComponent";
import DoctorRegistrationForm from "./components/DoctorRegistrationForm";
import AdminLogin from "./components/AdminLogin";
import DoctorLogin from "./components/DoctorLogin";
import DoctorList from "./components/DoctorList";
// import Doctorregistrationform2 from "./components/DoctorRegistrationForm2";

function App() {
  return (
     <div>
        <Router>
          <Routes>
            <Route path = "/" element = {<HomeComponent/>}></Route>
            <Route path = "/home" element = {<HomeComponent/>}></Route>
            <Route path = "/adminprofile" element = {<AdminProfile/>}></Route>
            <Route path = "/doctorregistrationlist" element = {<DoctorRegistrationList/>}></Route>
            <Route path = "/doctorregistrationform" element = {<DoctorRegistrationForm/>}></Route>
            {/* <Route path = "/doctorregistrationform2" element = {<DoctorRegistrationForm2/>}></Route> */}
            <Route path = "/adminlogin" element = {<AdminLogin/>}></Route>
            <Route path = "/doctorlogin" element = {<DoctorLogin/>}></Route>
            <Route path = "/doctorlist" element = {<DoctorList/>}></Route>

            <Route path = "/doctordashboard" element = {<DoctorDashboard/>}></Route>
            <Route path = "/doctorprofile" element = {<DoctorProfile/>}></Route>
            <Route path="/addpatient" element= {<AddPatient/>}></Route>
            <Route path="/viewtreatmenthistory" element= {<ViewTreatmentHistory/>}></Route>
            <Route path="/viewpatient" element= {<ViewPatient/>}></Route>
            <Route path="/addhistory" element={<AddHistory/>}></Route>

            <Route path="/viewmypatients" element={<ViewMyPatients/>}></Route>
          </Routes>
        </Router>
        {/* <AddPatient/>
        <DoctorDashboard/>
        <DoctorDashboard/> */}
      </div>
     
  );
}
export default App;