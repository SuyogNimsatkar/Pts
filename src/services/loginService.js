import axios from 'axios';

const APPLICANT_API_Doctor="http://localhost:8092/loginDoctor" ;


class loginService{

    loginStaff(logdetails){
     return axios.post(APPLICANT_API_Doctor, logdetails);
 }
 

}

export default new loginService(); 