import axios from 'axios';


export default function api(cancelToken) {
    const url = process.env.BASE_URL 
    const instance = axios.create({
        baseURL : url,
        withCredentials : true,
        cancelToken
    });
    instance.interceptors.response.use(
        (response) => {
            console.log('res',response);
            return response;
        },
        (error) => {
            console.error('err',error);
            return error.response;
        }
    );
    return instance;
}