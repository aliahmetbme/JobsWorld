const INITIAL_STATE = {
    URL_SOURCE:""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_IMAGE_SOURCE" :
            return {
                ...state, URL_SOURCE: action.payload
            }
        default: 
            return state
    }
}