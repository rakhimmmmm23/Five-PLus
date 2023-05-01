import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL ?? 'https://fiveplus.online/api',
})

export const apiClient = instance
