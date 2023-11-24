import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasks/taskSlice'
import commentsReducer from './comments/commentsSlice'
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        comments: commentsReducer
    }  
})

export type RootState = ReturnType<typeof store.getState>