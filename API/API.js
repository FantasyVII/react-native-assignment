
import axios from 'axios'
import { create } from 'apisauce'

const customAxiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/posts' })

export const api = create({ axiosInstance: customAxiosInstance })