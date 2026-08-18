import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Features/taskSlice.js";

export const store = configureStore({
    reducer:{
        tasks: taskReducer
    }
})