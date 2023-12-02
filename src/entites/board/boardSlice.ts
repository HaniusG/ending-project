import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { TaskItemProps, TaskProps } from "pages/TasksPage/TaksPage.interface";
import { log } from "console";
import { useSelector } from "react-redux";
import { RootState } from "entites/store";

interface initialStateBoard {
  board: any;
  loading: boolean;
  error: null | Error;
}

const initialState: initialStateBoard = {
  board: [],
  loading: false,
  error: null,
};


export const fetchBoard= createAsyncThunk("boards/boaed1", async () => {
  const querySnapshot = await getDocs(collection(db, "boards"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

export const createBoard = createAsyncThunk(
  "blog/createPost",
  async ({
    taskState,
    tasks,
  }: {
    taskState: string;
    tasks: TaskItemProps[];
  }) => {
    const docRef = await addDoc(collection(db, "boards"), {
      taskState,
      tasks,
    });

    return { id: docRef.id, taskState, tasks };
  }
);

export const addTaskGroup = createAsyncThunk(
  "boards/addIssueAFunc",
  async ({
    id,
    postData,
    updateCase,
    parentId,
    selfId,
  }: {
    id: string;
    postData: any;
    parentId: number;
    selfId: number;
    updateCase: string;
  }) => {
    const querySnapshot = await getDocs(collection(db, "boards"));
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    let projectArrClone = [...data[0].board1];
    const postRef = doc(db, "boards", id);


    if (updateCase === "addTG") {
      const ids: number[] = [];

      projectArrClone.map((task) => {
        return ids.push(task.id);
      });

      const max = ids ? Math.max(...ids) : 1;

      projectArrClone.push({ id: max + 1, ...postData });

      await updateDoc(postRef, { board1: projectArrClone });
    } else if (updateCase === "addT") {
      const task = projectArrClone.find((task) => task.id === parentId);

      const ids: number[] = [];

      projectArrClone.map((task) =>
        task.tasks.map((object: any) => {
          return ids.push(object.id);
        })
      );

      const max = ids ? Math.max(...ids) : 1000;

      task?.tasks.push({
        id: max + 1,
        name: postData,
        comments: [],
      });

      await updateDoc(postRef, { board1: projectArrClone });
    } 

    else if(updateCase === "addTI"){
      const task = projectArrClone.find((task) => task.id === parentId);
      const taskItem = task.tasks.find((item: any)=>item.id === selfId)
      taskItem.name = postData;
      await updateDoc(postRef, { board1: projectArrClone });
    }else if(updateCase === "addTC"){

      const task = projectArrClone.find((task) => task.id === parentId);
      const taskItem = task.tasks.find((item: any)=>item.id === selfId)

      taskItem.comments.push({
        id: 5,
        author: {
          id: 23,
          name: postData.name,
          image: postData.image,
        },
        text: postData.comment,
        date: new Date().toDateString(),
        replies: []
      });
      await updateDoc(postRef, { board1: projectArrClone });
    }else if(updateCase === "dnd"){
      projectArrClone = postData;
      await updateDoc(postRef, { board1: projectArrClone });
    }

    return { id, board1: projectArrClone };
  }
);

export const createNewBoard = createAsyncThunk(
  "board/createBoard",
  async (boardName: string) => {


    const docRef = await addDoc(collection(db, "boards"), {
      boardName,
      boards: []
    });
    return { id: docRef.id, boardName, board1: []};
  }
);


const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBoard.pending as any]: (state) => {
      state.loading = true;
    },
    [fetchBoard.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.board = action.payload;
    },
    [fetchBoard.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createBoard.pending as any]: (state) => {
      state.loading = true;
    },
    [createBoard.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.board[0].board1.push(action.payload as any);
    },
    [createBoard.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addTaskGroup.pending as any]: (state) => {
      state.loading = true;
    },
    [addTaskGroup.fulfilled as any]: (state, action) => {
      state.loading = false;
      const index = state.board.findIndex(
        (post: any) => post.id === action.payload.id
      );

      if (index !== -1) {
        state.board[index] = action.payload;
      }
    },
    [addTaskGroup.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default boardSlice.reducer;
