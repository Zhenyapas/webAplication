import { useState, useEffect } from 'react';
export const useParseStrToPhone= (phoneNumberString:string):string => {

    const [status, setStatus] = useState('Loading...')

    const phoneNumber= (phoneNumberString) ? phoneNumberString : '';


    const func = (str:string) => {
        
     return str.replace(/\D+/g, '')
     .replace(/(\d{2})(\d{2})(\d{3})(\d{3})/, '+$1 ($2) $3-$4');

    }
    
    useEffect(() => {setStatus(func(phoneNumber))} , [phoneNumberString])

    return status

}