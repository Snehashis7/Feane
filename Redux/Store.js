import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./AuthSlice";
import { createslice } from "./CrudSlice";

export const Store = configureStore({
  reducer: {
    
    contents:LoginSlice.reducer,
    Crud:createslice.reducer,
       
  },

});