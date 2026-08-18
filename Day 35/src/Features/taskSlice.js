import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "tasks",

    initialState,

    reducers:{
        addTask:(state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask:(state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
        toggleTask:(state, action) => {
            const task = state.tasks.find(
                (task) => task.id === action.payload
            );

            if(task) task.completed = !task.completed;
        }
    }
})

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;