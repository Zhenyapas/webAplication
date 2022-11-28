import { useEffect, useState } from 'react';
import { IUser } from '../models/models';


export const useSalaryParse = (user:IUser,):string => {


    

    const [status, setStatus] = useState('Loading...');
    
    const {salary} = (user) ? user : {salary:''} 
     

    const count = (str:string) => {

        const isThousand = (/k/).test(str);
        
      
     return '€ ' + str.replace(/[^+\d-]/g, '')
                .split('-')
                .map(e => (isThousand) ? (e + ' 000—') : (e + '—'))
                .join().replace(/,/,'')
                .replace(/—$/,'');
        
    }

    useEffect(() => (user) && setStatus(count(salary)) ,[user])

    return status;
  
}