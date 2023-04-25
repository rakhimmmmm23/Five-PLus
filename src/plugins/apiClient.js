import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL ?? 'https://api.fiveplus.online',
})

export const apiClient = instance