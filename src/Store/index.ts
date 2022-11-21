import {combineReducers, configureStore } from "@reduxjs/toolkit";
import  userReducer  from './slices/userSlice';

const rootReducer = combineReducers({
    
    jobs:userReducer,

})

export function setUpStore() {

    return configureStore({

        reducer:rootReducer

    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;

export type AppDispatch = AppStore['dispatch'];