import React, { Component } from 'react'
import adminService from '../services/AdminService';
import DoctorService from '../services/DoctorService';

class DoctorRegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DoctorName: '',
      Email: '',
      Expertise: '',
      Qualification: '',
      password: '',
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["DoctorName"]) {
      formIsValid = false;
      errors["DoctorName"] = "Name is Required";
    }

    if (typeof fields["DoctorName"] !== "undefined") {
      if (!fields["DoctorName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["DoctorName"] = "Only letters";
      }
    }

    if (!fields["Email"]) {
      formIsValid = false;
      errors["Email"] = "Email is Required";
    }

    // if (typeof fields["Email"] !== "undefined") {
    //   if (!fields["Email"].match(!/\S+@\S+\.\S+/)) {
    //     formIsValid = false;
    //     errors["Email"] = "please enter Correct Email Address";
    //   }
    // }



    if (!fields["Expertise"]) {
      formIsValid = false;
      errors["Expertise"] = "This is Madatory";
    }

    if (!fields["Qualification"]) {
      formIsValid = false;
      errors["Qualification"] = "This is Madatory";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password field can not be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
        formIsValid = false;
        errors["password"] = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
      }
    }


    this.setState({ errors: errors });
    return formIsValid;
  }

  doctorFormSubmit(e) {
    e.preventDefault();
    let fields = this.state.fields;
    let doctor = { doctorName: fields["DoctorName"], doctorEmail: fields["Email"], expertise: fields["Expertise"], doctorQualification: fields["Qualification"], password: fields["password"], status: "pending" };
    console.log('doctor => ' + JSON.stringify(doctor));

    if (this.handleValidation()) {
      DoctorService.doctorregister(doctor).then(res => {
        alert("Form submitted");
        window.open("/DoctorRegistrationForm", "_self");
      });

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
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br></br>
              <h2 className="text-center">Doctor Registration Form</h2>

              <div className="card-body">

                <form
                  name="doctorFormSubmit"
                  className="doctorFormSubmit"
                  onSubmit={this.doctorFormSubmit.bind(this)}
                >
                  {/* <div className="col-md-6"> */}
                  <div className="form-group">

                    <fieldset>
                      <label> Name: </label>
                      <input
                        ref="DoctorName"
                        type="text"
                        size="30"
                        placeholder="Doctor Name"
                        className="form-control"
                        onChange={this.handleChange.bind(this, "DoctorName")}
                        value={this.state.fields["DoctorName"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["DoctorName"]}</span>
                      <br />
                      <label> Email: </label>

                      <input
                        refs="Email"
                        placeholder="Email"
                        className="form-control"

                        onChange={this.handleChange.bind(this, "Email")}
                        value={this.state.fields["Email"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["Email"]}</span>
                      <br />

                      <label> Expertise: </label>

                      <input
                        refs="Expertise"
                        type="text"
                        size="30"
                        className="form-control"

                        placeholder="Expertise"
                        onChange={this.handleChange.bind(this, "Expertise")}
                        value={this.state.fields["Expertise"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["Expertise"]}</span>
                      <br />

                      <label> Qualification: </label>

                      <input
                        refs="Qualification"
                        type="text"
                        size="30"
                        className="form-control"

                        placeholder="Qualification"
                        onChange={this.handleChange.bind(this, "Qualification")}
                        value={this.state.fields["Qualification"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["Qualification"]}</span>
                      <br />

                      <label> Password: </label>

                      <input
                        refs="password"
                        placeholder="password"
                        className="form-control"

                        onChange={this.handleChange.bind(this, "password")}
                        value={this.state.fields["password"]}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                      <br />

                      <br />
                      <button className="btn btn-primary" style={{ color: "black" }}  >submit</button>


                    </fieldset>
                  </div>
                  {/* <button className="btn btn-dark">submit</button> */}
                </form>
                <br />

                <button style={{ marginLeft: "10px" }} className="btn btn-dark" onClick={() => { window.open("/home", "_self") }}>back</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorRegistrationForm