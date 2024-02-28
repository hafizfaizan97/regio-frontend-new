import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../services/auth";

const initialState = {
    demoSlice: {
        isAuthenticated:false,
        userProfile: {},
        userRegisterData:{}
    }
}

export const loginRequest = createAsyncThunk(
    'USER_LOGIN',
    async (payload) => {
        const response = await userLogin(payload);

        return response
    }
)

export const signUpRequest = createAsyncThunk(
    'AUTH_REGISTER',
    async (payload) => {
      const response = await userRegister(payload);
      return response;
    }
  )

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
   
    extraReducers: (builder) => {
        builder.addCase(loginRequest.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.userProfile = action.payload;
        });
        
        builder.addCase(signUpRequest.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.userRegisterData = action.payload;
          });

    }
})
export const {  } = authSlice.actions
export default authSlice.reducer