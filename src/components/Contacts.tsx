import {ReactComponent as Marker} from '../img/marker.svg'
import { ICard } from '../models/models';
import { useEffect, useState } from 'react';
import MapPicture from './MapPicture';
import { useParseStrToPhone } from '../hooks/parseStrToPhone';

const initialState =   { 
    name:'',

    location:{
        
        lat:'50.44781426974846', 
        long:'30.522057886505554' ,
    },

    address:'',

    email:'',

    phone: 'Loading...',

};

function Contacts({user}:ICard) {

   const [state, setState] = useState(initialState)

   useEffect(() => setState({...user}),[user])

    const {name,location,address,phone,email} = (state) 
    const x = location?.lat;
    const y = location?.long;


    const phoneNumber = useParseStrToPhone(phone);

    console.log(x, y)
    
  return (

    <>
      <div className='2xl:max-w-[85px]'></div>
        <div className=''> 
          <div className='h-[220px] w-[372px]  pc:w-[402px] bg-[#2A3047] rounded-tl-[8px] rounded-tr-[8px] overflow-hidden '>
            <div className='hidden pc:block relative right-[90px]  bottom-[20px] z-10  rounded-[50%] w-[273px] h-[273px] bg-[#202336] '></div> 

           <div className='mt-[31px] ml-[62px]  pc:pcMap'>
            <div className='  font-proxima text-[#f0ede7] text-base  '>
              Departament name. 
            </div>
            <div className=' font-proxima text-base -mt-[4px] text-[#f0ede7]'>{name}</div>
            <div className='flex items-center mt-[17px]'>
              <Marker className='w-[13px] mr-[8px]' />
              <div className=' text-base -tracking-[0.5px] font-[400] text-[#E7EAF0] pc:text-[#E8EBF3]  '>{address}</div>
            </div>
            <div className='text-[#f0ede7] text-base font-[400] mt-[3px] -tracking-[0.5px]  '>Gurtel 18-20</div>
            <div className='font-proximaThin pc:font-roboto text-[#FFFFFFAB] pc:text-[#E8EBF3] text-base font-[400] mt-[6px] -tracking-[0.5px] opacity-[70%] pc:opacity-100'>{phoneNumber}</div>
            <div className='font-proximaThin pc:font-roboto text-[#FFFFFFAB] pc:text-[#E8EBF3] text-base font-[400] -mt-[2px] -tracking-[0.5px] opacity-[70%] pc:opacity-100'>{email}</div>
           </div>
          </div>
          <div className='h-[216px] w-[372px] pc:w-[402px] mb-[20px] rounded-bl-[8px] rounded-br-[8px] overflow-hidden'>
            <MapPicture x={x} y={y} />
          </div>
        </div>
    </>
       
  );
}

export default Contacts;