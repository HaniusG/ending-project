import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentProps } from "pages/TasksPage/TaksPage.interface";
interface initialStateComments{
    isClicked: boolean | null;
    comments: CommentProps[] | null
    parentId: number,
    selfId: number,
}

const initialState:initialStateComments  = {
    isClicked: null,
    comments: null,
    parentId: 0,
    selfId: 0,
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        clickChange: (state, action: PayloadAction<boolean>)=>{
            state.isClicked = action.payload;
        },
        commentChange: (state, action: PayloadAction<{comments: CommentProps[], parentId: number, selfId: number}>)=>{
            state.comments = action.payload.comments;
            state.parentId = action.payload.parentId;
            state.selfId = action.payload.selfId;
        },
    }
});

export const {clickChange, commentChange} = commentsSlice.actions;

export default commentsSlice.reducer;