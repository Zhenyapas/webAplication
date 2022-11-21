import { userSlice } from './../slices/userSlice';
import { AppDispatch } from "../index";
import axios from "axios";
import { getUsers} from "../../axios/axios"
import { IUser, ServerResponse } from "../../models/models";



export const fetchUsers = () => {
    return async (dispatch:AppDispatch) => {

        try {
           dispatch(userSlice.actions.fetching()); 
           const response = await  axios.request<IUser[]>(getUsers);
           console.log(response)
           dispatch(userSlice.actions.fetchSuccess(response.data));
          
        }

        catch(e) {
            dispatch(userSlice.actions.fetchError(e as Error));
        }
    }
 }