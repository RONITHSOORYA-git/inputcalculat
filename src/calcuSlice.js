import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({

    name:"counter",
    initialState:{
        

           counter:""
    },

    reducers:{
        increase(state){
            state.counter++
        },

        Decrease(state){
            state.counter--
        },
        Reset(state){
            state.counter=0
        },
        Add(state,action){
          state.counter= eval(action.payload)
        }



    }




})

export default counterSlice.reducer
export const {increase,Decrease,Reset,Add}=counterSlice.actions