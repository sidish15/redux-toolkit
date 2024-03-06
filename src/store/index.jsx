import  {configureStore} from '@reduxjs/toolkit';
import  userSlice  from './slices/UserSlices';

const store=configureStore({
        reducer:{
                users:userSlice,
        },
        /* 
        If this(reducer) is a single function,it will  be directly used as the root reducer for the store

       If it is an object of slice reducers,like {users:usersReducer,posts:postsReducer}, configureStore will automatically create the root reducer by passing this object to the Redux combineReducers utility
        */
})

export default store;