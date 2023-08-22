const INITIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_JOBS" :
            return {
            ...state,
            loading :{...state.loading, loading:false},
            data: action.payload}
        default: 
            return state
    }
}