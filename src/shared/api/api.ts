import axiois, { AxiosError } from 'axios'

const baseUrl = __IS_DEV__ ? "http://localhost:8000" : "http://localhost:8000"


export const $api = axiois.create({
    baseURL: baseUrl, 
    headers: {
        authorization: localStorage.getItem('user') || true
    }
})