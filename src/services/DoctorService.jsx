import axios from 'axios';

const url = 'http://localhost:8092/doctor';

const addpatient = data => {
    return axios.post(`${url}/addpatient`, data);
}

const addhistory = data => {
    return axios.post(`${url}/addhistory`, data);
}

const getpatientbyid = patientId => {
    return axios.get(`${url}/getpatient/${patientId}`);
}

const gethistorybypatientid = (patientId) => {
    return axios.get(`${url}/gethistory/${patientId}`);
}

const getpatientbydoctorid = (doctorId) => {
    return axios.get(`${url}/getpatientbydoctorid/${doctorId}`);
}

const doctorregister = data => {
    return axios.post(`${url}/doctorregister`, data);
}

const doctorlogin = data => {
    return axios.post(`${url}/doctorlogin`, data);
}

export default {addpatient, addhistory, getpatientbyid, gethistorybypatientid, getpatientbydoctorid, doctorregister, doctorlogin};