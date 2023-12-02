import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface initialStateComments{
    isClicked: boolean | null;
    parentId: number,
}

const initialState:initialStateComments  = {
    isClicked: null,
    parentId: 1000,
}

export const deleteSlice = createSlice({
    name: 'delete',
    initialState,
    reducers:{
        deleteClickChange: (state, action: PayloadAction<boolean>)=>{
            state.isClicked = action.payload;
        },
        setParentId: (state, action: PayloadAction<number>)=>{
            state.parentId = action.payload;
        },
    }
});

export const {deleteClickChange, setParentId} = deleteSlice.actions;

export default deleteSlice.reducer;