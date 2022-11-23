import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { Id, IUser, ServerResponse } from '../../models/models';


export interface userData {

    loading: boolean,
    error: string,
    users: IUser[],
    pined: string[],


}
const initialState: userData = {

    loading:false,
    error: '',
    users:[],
    pined:['635ee6d3ece4a5643d58f4bd','635ee6d374cb23dcaf624aeb']

}

export const userSlice = createSlice({

    name: 'users',

    initialState,
    
    reducers : {

     fetching(state) {

        state.loading = true;
     },

     fetchSuccess(state, action: PayloadAction<IUser[]>){

        state.loading = false;
        state.users = action.payload
     },

     fetchError(state, action: PayloadAction<Error>){

        state.loading = false;
        state.error = action.payload.message;
    },

    folowUser(state, action:PayloadAction<string>){

       if(!state.pined.includes(action.payload))  state.pined.push(action.payload);
    },
    unfolowUser(state,action:PayloadAction<string>){

        const index = state.pined.findIndex(e => e === action.payload);
        state.pined = state.pined.filter((e:string):boolean => e === state.pined[index]);

    }
    
    }

})

export default userSlice.reducer;