import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counterSlice";


export const store = configureStore({
    reducer:{
        //counter its the name of the reducer to update state
        counter: counterSlice
    }
})