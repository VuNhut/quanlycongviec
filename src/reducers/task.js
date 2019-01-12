const tasks =  JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];

const task = (state = tasks, action) => {
    switch (action.type) {
        case "LIST_TASK" :
            return state;
        case "ADD_TASK" :
            console.log(action);
            return state
        default:
            return  state;
    }
}

export default task;