import {Configuration, DefaultApi} from "api";
import axios from "axios";
import Cookies from "js.cookie.min"

const BASE_URL = 'https://dev.backend.kollabium.com'

const axiosInstance = axios.create();

const authHeaderInterceptor = (config) => {
    config.headers.Authorization = Cookies.get('auth-token')
};

axiosInstance.interceptors.request.use(authHeaderInterceptor)

const apiConfiguration = new Configuration()

export const api = new DefaultApi(apiConfiguration, BASE_URL, axiosInstance)
