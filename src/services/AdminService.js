import axios from 'axios';

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const APPLICANT_API_deleteApplicant = "http://localhost:8092/deleteDoctor";
const APPLICANT_API_updateApplicantStatus = "http://localhost:8092/updateDoctorStatus";
const APPLICANT_API_viewDoctorByStatus = "http://localhost:8092/admin/viewDoctorByStatus";
const APPLICANT_API_viewDoctor = "http://localhost:8092/viewDoctorByDoctorId";

class AdminService {


    deleteDoctor(doctorId) {
        return axios.delete(APPLICANT_API_deleteApplicant + '/' + doctorId);
    }
    getDoctorByStatus(status) {
        return axios.get(APPLICANT_API_viewDoctorByStatus + '/' + status);
    }
    updateDoctorStatus(doctorId, status) {
        console.log(doctorId, status)
        return axios.put(APPLICANT_API_updateApplicantStatus + '/' + doctorId + '/' + status);
    }
    viewDoctor(doctorId){
        return axios.get(APPLICANT_API_viewDoctor + '/' + doctorId);
    }
}

export default new AdminService()