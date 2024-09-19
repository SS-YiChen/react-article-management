// state for user management

import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name:'user',
    initialState: {
        token:'',
    },
    // method
    reducers: {
        setToken(state, action){
            state.token = action.payload
        }
    }
})

const {setToken} = userStore.actions

// get reducer function
const userReducer = userStore.reducer;

// async funciton - get token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
      const res = await request.post('/authorizations', loginForm)
      dispatch(setToken(res.data.token))
    }
  }

export {fetchLogin, setToken}

export default userReducer;
