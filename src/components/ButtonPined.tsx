import {ReactComponent as Pined} from '../../src/img/pined.svg';
import {ReactComponent as NotPined} from '../../src/img/NotPined.svg';
import { useState} from 'react';
import { folowUser, unfolowUser } from '../Store/actions/userActions';
import { IUser } from '../models/models';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {ReactComponent as Star} from '../img/star.svg';
import {ReactComponent as StarPined} from '../img/StarPined.svg';

interface IPined {
  user:IUser,
  icon?:string,
  className?:string
}

const ButtonPined = ({user,icon,className}:IPined) => {


    const{pined} = useAppSelector((state) => state.jobs);
    const dispatch = useAppDispatch();



    const [isActive,setActive] = useState(pined.includes(user.id));

    const toggle = () => {
      
      (isActive) ? dispatch(unfolowUser(user.id)) : dispatch(folowUser(user.id));  
       setActive(!isActive);

    }




   
    return (

     <div className={className} onClick={toggle}>

       {(isActive) ? <Pined className=' lg:pined ' /> : <NotPined className=' lg:pined ' />}

     </div>

    )
}

export default ButtonPined;