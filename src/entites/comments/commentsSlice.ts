import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentProps } from "pages/TasksPage/TaksPage.interface";
interface initialStateComments{
    isClicked: boolean | null;
    comments: CommentProps[] | null
}

const initialState:initialStateComments  = {
    isClicked: null,
    comments: null
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        clickChange: (state, action: PayloadAction<boolean>)=>{
            state.isClicked = action.payload;
        },
        commentChange: (state, action: PayloadAction<CommentProps[]>)=>{
            state.comments = action.payload;
        },
    }
});

export const {clickChange, commentChange} = commentsSlice.actions;

export default commentsSlice.reducer;