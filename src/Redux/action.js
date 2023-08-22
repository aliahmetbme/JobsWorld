import {GET} from "../Requests/api"

export const SetName = (name) => {
    return {
        type:"GET_JOBS",
        payload:GET
    }
}

export const SetAge = (age) => {
    return {
        type:"SET_AGE",
        payload:age
    }
}
