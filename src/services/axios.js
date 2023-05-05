import axios from "axios";

export default axios.create({
    baseURL: 'https://localhost:7018',
    timeout: 30000
});