export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = task => {
    return { type : ADD_TASK, task };
}

export const editTask = idTask => {
    return { type : EDIT_TASK, idTask }
}