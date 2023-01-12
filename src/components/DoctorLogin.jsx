import React, { Component } from 'react'
import loginService from '../services/loginService';
import DoctorDashboard from '../components/Doctor/DoctorDashBoard';
import DoctorService from '../services/DoctorService';
import HeaderComponent from '../components/HeaderComponent';

class DoctorLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["DoctorId"]) {
      formIsValid = false;
      errors["DoctorId"] = "Cannot be empty";
    }
    //Name
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }


    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    let fields = this.state.fields;
    if (this.handleValidation()) {
      let loginDetails = { doctorId: fields["DoctorId"], password: fields["password"] }
      console.log(loginDetails);
      DoctorService.doctorlogin(loginDetails).then(res => {
        console.log(res);
        if (res.data === "Doctor Login Successful") {
          localStorage.setItem('DoctorId', loginDetails.doctorId);
          localStorage.setItem('Doctorpassword', loginDetails.password);
          window.open("/doctordashboard", "_self");
        }
        else
          alert("Login Failed please enter correct Id & Password");
      })
      .catch(error =>{
        console.log("error", error);
      })
    } else {
      alert("Form has errors.");
    }
  }


  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br></br>
              <h2 className="text-center">Doctor Login</h2>

              <div className="card-body">

                <form
                  name="contactform"
                  className="contactform"
                  onSubmit={this.contactSubmit.bind(this)}
                >
                  {/* <div className="col-md-6"> */}
                  <div className="form-group">

                    <fieldset>
                      <label> Doctor Id </label>

                      <input
                        ref="DoctorId"
                        placeholder="DoctorId"
                        className="form-control"

                        onChange={this.handleChange.bind(this, "DoctorId")}
                        value={this.state.fields["DoctorId"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["DoctorId"]}</span>
                      <br />
                      <label>Password</label>

                      <input
                        refs="password"
                        placeholder="password"
                        className="form-control"

                        onChange={this.handleChange.bind(this, "password")}
                        value={this.state.fields["password"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                      <br />
                      <button style={{ marginLeft: "10px" }} className="btn btn-dark" >Login</button>

                      <br />
                    </fieldset>
                  </div>
                </form>
                <br></br>
                <button style={{ marginLeft: "10px" }} className="btn btn-light" onClick={() => { window.open("/Home", "_self") }}>Back</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DoctorLogin;
