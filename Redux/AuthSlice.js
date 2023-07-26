import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Redux/Helper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const initialState = {
  upload_status: "idle",
  // upload_message: "idle",
  status:"idle",
  login_status:"idle",
  des: [],
  isloggedIn:false,
  redirectTo: null,
  redirectthree:null,
};


export const register = createAsyncThunk(
  "user/signup",

  async (formData) => {
    let res = await axiosInstance.post(`user/signup`, formData);

    let resData = res?.data;

    return resData;
  }
);

export const login = createAsyncThunk(
  "user/signin",

  async (formData) => {
    let res = await axiosInstance.post(`user/signin`, formData);

    let resData = res?.data;

    return resData;
  }
);


export const LoginSlice = createSlice({
  name: "registration",
  initialState,
    reducers: {
      reset_redirectTo: (state, { payload }) => {
        state.redirectTo = payload;
      },
      reset_login:(state,{payload})=>{
        state.redirectthree =payload;
      },
      handleLogout: (state, { payload }) => {
        localStorage.removeItem("token");
        state.isloggedIn = false;
      },
      check_token: (state, { payload }) => {
        let token = localStorage.getItem("token");
        if (token !== null && token !== undefined) {
          state.isLogin = true;
      }
    },
  },

  extraReducers: (builder) => {
    builder


      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(register.fulfilled, (state,{payload}) => {
        if (payload?.status === 200) {
          toast(payload?.message)
        state.redirectthree = "/login";
        localStorage.setItem("name", payload?.data?.first_name);
        }else{
          if(payload?.status==201){
              toast(payload?.message)
             
        
          
          // localStorage.setItem("token", payload?.token);
          // localStorage.setItem("setting", "pst");
         
        }
      }})
      
      .addCase(login.pending, (state, action) => {
        state.login_status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload?.status === 200) {
          state.isloggedIn= true;
          localStorage.setItem("token", payload?.token);
          state.redirectTo = "/Display"; 
          toast(payload?.message)
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.login_status = "idle";
        console.log("kjjhj",state.login_status);
      })
  },
});

export const {reset_redirectTo,check_token, handleLogout, reset_login}= LoginSlice.actions;
