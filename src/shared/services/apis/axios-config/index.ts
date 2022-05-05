import axios from "axios";
import { errorInterceptor } from "./interceptors";


const Api = axios.create(
    {
        baseURL: 'https://incubacao.herokuapp.com/api/v1/',
        headers: {
            "Content-type": "application/json"
        }
    }
);


axios.interceptors.response.use( () => errorInterceptor);

export default Api;