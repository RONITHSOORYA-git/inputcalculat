import { configureStore } from "@reduxjs/toolkit";
import calcuSlice from "./calcuSlice";






const store=configureStore({

     reducer:{
          counterreducer:calcuSlice

     }
         
     

    


     })










export default store