import axios from "axios";

const api = axios.create();
api.defaults.timeout = 2500;

export default api;
