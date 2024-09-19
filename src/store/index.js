// entrance for all redux components

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

export default configureStore({
    reducer:{
        user: userReducer
    }
})