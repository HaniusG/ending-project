import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

interface User{
    uid: string,
    email: string | null,
    displayName: string | null;
    photoURL: string | null;
}

export const loginWithGoogle = createAsyncThunk(
  "user/loginWithGoogle",
  async (_, {rejectWithValue}) => {
    try{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const userData: User = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL
        }

        return userData;
    }catch(error){
        if(error instanceof Error) {
            rejectWithValue('My Error message')
        }else {
            rejectWithValue('My error message')
        }
    }
    
  }
);

export const loginWithGithub = createAsyncThunk(
  "user/loginWithGithub",
  async (_, {rejectWithValue}) => {
    try{
        const provider = new GithubAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const userData: User = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL
        }

        return userData;
    }catch(error){
        if(error instanceof Error) {
            rejectWithValue('My Error message')
        }else {
            rejectWithValue('My error message')
        }
    }
    
  }
);

interface State{
  loading: boolean,
  error: string | null,
  profile: User | null,
}

const initialState: State= {
  loading: false,
  error: null,
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>)=>{
      state.profile = action.payload;
  },
  },
  extraReducers: {
    [loginWithGoogle.pending as any]: (state) => {
      state.loading = true;
    },
    [loginWithGoogle.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [loginWithGoogle.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [loginWithGithub.pending as any]: (state) => {
      state.loading = true;
    },
    [loginWithGithub.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [loginWithGithub.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;

export const {setUser} = userSlice.actions;