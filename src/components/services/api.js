import axios from "axios";

export cont api = axios.create({
    baseURL: "http://api.github.com",
})