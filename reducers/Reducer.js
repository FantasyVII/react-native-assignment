import { RECEIVE_API_DATA } from '../constants/constants'

export default (state = "[]", { type, data = {} }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            return data
        default:
            return state
    }
}