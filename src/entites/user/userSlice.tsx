import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentProps } from "pages/TasksPage/TaksPage.interface";
interface initialStateComments{
    isLoggedIn: boolean
}

const initialState:initialStateComments  = {
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLogin: (state, action: PayloadAction<boolean>)=>{
            state.isLoggedIn= action.payload;
        },
    }
});

export const {setLogin} = userSlice.actions;

export default userSlice.reducer;