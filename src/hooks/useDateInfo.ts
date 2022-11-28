import { useEffect, useState } from 'react';
import { IUser } from '../models/models';

export const useDateInfo = (user:IUser,):string => {



    const {updatedAt,createdAt} = (user) ? user : {updatedAt:'',createdAt:''};

    const date = (user) ? (updatedAt) ? updatedAt : createdAt : '';
    

    const count = (str:string) => {
  
    const date = new Date(str);
    const today = new Date();
    
    const years = today.getFullYear() - date.getFullYear();
    const months = today.getMonth() - date.getMonth();
    const days = today.getDate() - date.getDate();
    const hours = today.getHours() - date.getHours();
    const minutes = today.getMinutes() - date.getMinutes();
    
    return (years>0) ? `posted ${years} ${years>1 ? 'years' : 'year'} ago.` 
    : (months>0) ? `posted ${months} ${(months>1) ? 'months' : 'months'} ago.` :
    (days>0) ? `posted ${days} ${(days>1) ? 'days' : 'day' } ago.` : 
    (hours>0) ? `posted ${hours} ago` : (minutes>0) ? `posted ${minutes} ago.` : `...recently`;
    }

    
    
    const [status, setStatus] = useState('Loading...');


    useEffect(() => {

        (user) && setStatus(count(date));

    } ,[user])
    

    return status;
  
}