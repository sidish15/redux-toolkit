import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
        name:"user",
        initialState:[],
        reducers:{
                addUser(state,action){
                        state.push(action.payload);
                },
                removeUser(state,action){
                        // console.log(state);
                        console.log(action);
                        console.log("hi " + action.payload);
                        state.splice(action.payload,1)
                        
                },
                deleteUsers(state,action){},
        },
});

console.log(userSlice.actions);
export default userSlice.reducer;
export const {addUser,removeUser} =userSlice.actions;
// userSlice.reducer :method