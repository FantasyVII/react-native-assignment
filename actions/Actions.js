import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../constants/constants'

export const requestAPIData = () => ({ type: REQUEST_API_DATA })
export const receiveAPIData = data => ({ type: RECEIVE_API_DATA, data })