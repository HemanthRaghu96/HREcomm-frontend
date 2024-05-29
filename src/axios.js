import axios from "axios";

const instance = axios.create({
    baseURL: "https://hrecomm-backend.onrender.com",
});

export default instance;
