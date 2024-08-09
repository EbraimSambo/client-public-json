import axios from "axios";


export const configInstance = axios.create({
    baseURL: "http://localhost:7000/",
})