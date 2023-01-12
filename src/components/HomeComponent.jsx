import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import pic from "./images/home2.jpg";
class HomeComponent extends React.Component{

    render(){
      
return(
    <div>

    <HeaderComponent />
    <br/>
    <div className="container">
    <img src={pic} /><br></br><br></br>
    <center><h1> A Patient Tracker System <br></br> For The Health Industry </h1></center>
    <br></br>
    <div className="divhomeleader">  
    <div className="gynecologist"></div>
    <div className="neuro"></div>
    <div className="orthopadic"></div>
    </div>

</div>
    <br></br>
    <FooterComponent />
    </div>
)
}
}

export default HomeComponent