const initialState = {
    status : false
}

const status = (state = initialState.status, action) => {
    if (action.type === "CHANGE_STATUS") {
        return state = !state;
    }
    return state;
}

export default status;