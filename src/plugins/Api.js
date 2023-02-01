import axios from 'axios';

const baseUrl = "http://Backend.test/api";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// Add interceptor to add bearer token on every request
instance.interceptors.request.use(
    function (config) {
        //console.log("TEXT")
        // Do something before request is sent
        // Set bearer token from local storage if exists
        config.headers.Authorization = 'Bearer ' + localStorage.getItem("app_token")
        //console.log(config.headers.Authorization)
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        const code = parseInt(error.response && error.response.status)
        // If code is 401, redirect user to login page
        if (code === 401) {
            //window.location.href = `/login`
        } else {
            console.log(error);
        }
        return Promise.reject(error);
    }
);

export default instance;