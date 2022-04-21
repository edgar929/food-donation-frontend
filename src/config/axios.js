import axios from 'axios';
export default function axiosConfig() {
   axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
   console.log("BACKEND_URL",process.env.REACT_APP_BACKEND_URL)
}