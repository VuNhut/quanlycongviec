const initial = {
    tasks : JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [],
    taskEditing : []
}
var randomstring = require("randomstring");

const task = (state = initial.tasks, action) => {
    switch (action.type) {
        case "ADD_TASK" :
            var newTask = {
                id : randomstring.generate(), name : action.task.name, status : action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case "EDIT_TASK" :
            console.log(state);
            state.tasks.forEach((task, index) => {
                if (task.id === action.idTask) {
                    state.taskEditing = task;
                }
            })
            return state;
        default:
            return  state;
    }
}

export default task;