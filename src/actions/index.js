export const LIST_TASK = "LIST_TASK";
export const ADD_TASK = "ADD_TASK";

export const showTask = () => {
    return { type : LIST_TASK };
}

export const addTask = (task) => {
    return { type: ADD_TASK, task };
}