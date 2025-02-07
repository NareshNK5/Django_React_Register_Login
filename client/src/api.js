import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const registerUser = async (userData) => {
    return await axios.post(`${API_BASE_URL}/register/`, userData);
};

export const loginUser = async (userData) => {
    return await axios.post(`${API_BASE_URL}/login/`, userData);
};

export const getUserData = async () => {
    return await axios.get(`${API_BASE_URL}/dashboard/`, { headers: getAuthHeaders() });
};

export const logoutUser = () => {
    localStorage.removeItem("access_token");
};
