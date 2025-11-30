import axios from 'axios';

const API_URL = "http://localhost:5000/api/students";

export const registerStudent = (data) => axios.post(`${API_URL}/register`, data);
export const loginStudent = (data) => axios.post(`${API_URL}/login`, data);
export const getAllStudents = () => axios.get(`${API_URL}`);
