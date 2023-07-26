import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axiosInstance from "../Redux/Helper";
import { toast } from "react-toastify";

const initialState = {
    upload_status: "idle",
    status:"idle",
    login_status:"idle",
    des: [],
    // data:[{}],
    isloggedIn:false,
    redirectTo: null,
    AddredirectTo:null,
    updateredirect:null
  };

  export const create = createAsyncThunk(
    "product/create",
  
    async (formData) => {
      let res = await axiosInstance.post(`product/create`, formData);

      let resData = res?.data;
  
      return resData;
    }
  );
  export const Details = createAsyncThunk(
    "product/list",
  
    async () => {
      let res = await axiosInstance.post(`product/list`);

      let resData = res?.data;
  
      return resData;
    }
  );
  export const Editproduct = createAsyncThunk(
    "product/detail",
    async (id) => {
        let res = await axiosInstance.get(`product/detail/${id}`)
        let resData = res?.data;
        return resData
    }
);

export const Updateproduct = createAsyncThunk(
    "product/update",
    async (formdata) => {
        let res = await axiosInstance.post(`product/update`,formdata)
        let resData = res?.data;

        return resData;
    }
)
  
export const DeleteProduct = createAsyncThunk(
  "product/remove",
  

  async (formdata) => {
    let res = await axiosInstance.post(`product/remove`,formdata);

    let resData = res?.data;

    return resData;
  }
);
  

  export const createslice = createSlice({
    name: "Addproduct",
    initialState,
      reducers: {
        reset_redirectTo: (state, { payload }) => {
          state.redirectTo = payload;
        },
        Addredirect:(state,{payload})=>{
          state.AddredirectTo =payload;
        },
        updatere:(state,{payload})=>{
          state.AddredirectTo =payload;
        },
        check_token: (state, { payload }) => {
          let token = localStorage.getItem("token");
          if (token !== null && token !== undefined) {
            state.isloggedIn = true;
          }
        },
        handleLoggedout: (state, { payload }) => {
          localStorage.removeItem("token");
          state.isloggedIn = false;
        },
        removetitleupdate: (state, action) => {

          localStorage.removeItem('title')
        }
        
    },

    
    extraReducers: (builder) => {
        builder
        .addCase(create.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(create.fulfilled, (state,{payload}) => {
            if (payload?.status === 200) {
              state.isloggedIn= true;
              localStorage.setItem("title", payload?.data?.title);
              toast(payload?.message)
              state.AddredirectTo="/Display"
              
               }
          })
          .addCase(create.rejected, (state, payload) => {
            state.status = "idle";
          })
          .addCase(Details.pending, (state, payload) => {
            state.status = "loading";
          })
          .addCase(Details.fulfilled, (state, action) => {
            state.status = "idle";
            state.data = action.payload
            console.warn(action.payload);
    
          })
          .addCase(Details.rejected, (state, payload) => {
            state.status = "idle";
          })
          .addCase(Editproduct.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(Editproduct.fulfilled, (state, { payload }) => {

            console.error(payload);
            state.status = "filfilled";
            state.data = payload.data
        })
        .addCase(Editproduct.rejected, (state, action) => {
            state.status = "idle";
        })

        .addCase(Updateproduct.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(Updateproduct.fulfilled, (state, { payload }) => {
          if (payload?.status === 200) {
            // state.isloggedIn= false;
            localStorage.setItem("title", payload?.data?.title);
            state.updateredirect = "/Display"; 
            toast(payload?.message)
          }
        })
        .addCase(Updateproduct.rejected, (state, action) => {
            state.status = "rejected";
        })
          .addCase(DeleteProduct.pending, (state, action) => {
            state.status = "loading";
            state.delete_status = false;
          })
          .addCase(DeleteProduct.fulfilled, (state, {payload}) => {
            console.error(payload);
            state.status = "filfilled";
            state.data = payload.data    
                        
          })
          .addCase(DeleteProduct.rejected, (state, action) => {
            state.status = "idle";
            state.delete_status = false;
          })
    

        }
    })
       
       

export const {reset_redirectTo, handleLoggedout, Addredirect, updatere, removetitleupdate}= createslice.actions;
