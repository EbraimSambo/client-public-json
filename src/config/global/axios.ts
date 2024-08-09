import axios from "axios";


export const configInstance = axios.create({
    baseURL: "https://server-public-json.onrender.com/",
})