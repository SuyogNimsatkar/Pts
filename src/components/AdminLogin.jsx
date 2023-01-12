import React, { Component } from 'react';
// import { useState } from 'react';
import HeaderComponent from './HeaderComponent';

class AdminLogin extends React.Component {
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
      if (!fields["AdminId"]) {
        formIsValid = false;
        errors["AdminId"] = "Cannot be empty";
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
        let loginDetails={loginId:fields["AdminId"],password:fields["password"]}
        
        if(fields["AdminId"]==="1" && fields["password"]==="Admin"){
          localStorage.setItem('AdminId', loginDetails.loginId);
          localStorage.setItem('Adminpassword', loginDetails.password);
        window.open("/AdminProfile", "_self");
        }
        else
        {
          alert("Login Failed please enter correct Id & Password");
         
        }
        // alert("Form submitted");
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
            <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                            <h2 className="text-center">Admin Login</h2>
                 
                                <div className = "card-body">
            
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            {/* <div className="col-md-6"> */}
            <div className = "form-group">
           
              <fieldset>
              <label> Admin Id </label>
              
                <input
                  ref="AdminId"
                  placeholder="AdminId"
                  className="form-control"
                  
                  onChange={this.handleChange.bind(this, "AdminId")}
                  value={this.state.fields["AdminId"]}
                />
                <span style={{ color: "red" }}>{this.state.errors["AdminId"]}</span>
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
                <button style={{marginLeft: "10px"}} className="btn btn-dark"  >Login</button>

                <br />
              </fieldset>
            </div>
          </form>
          <br></br>
          <button style={{marginLeft: "10px"}} className="btn btn-light"  onClick={() => {window.open("/DoctorLogin", "_self")}}>Login As Doctor</button>

          </div>
          </div>
          </div>
          </div>
        </div>
      );
    }
  }
  export default AdminLogin