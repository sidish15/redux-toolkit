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
                clearAllUsers(state,action){
                        return [];
                }, 
        },
       extraReducers(builder){
        builder.addCase(userSlice.actions.clearAllUsers,()=>{
                return [];
        })
        // this extraReducer will not work if there is no microreducer(clearAllusers) in the userSlice
       } 
});

console.log(userSlice.actions);
export default userSlice.reducer;
export const {addUser,removeUser,clearAllUsers} =userSlice.actions;
// userSlice.reducer :method

/* 
1. If action is supposed to be handled by one reducer ,use reducers.
2.If action is supposes to be handled by multiple reducers,use extraReducers.
*/