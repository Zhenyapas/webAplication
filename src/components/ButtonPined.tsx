import {ReactComponent as Pined} from '../../src/img/pined.svg';
import {ReactComponent as NotPined} from '../../src/img/NotPined.svg';
import {useEffect, useState} from 'react';
import { folowUser, unfolowUser } from '../Store/actions/userActions';
import { ICard } from '../models/models';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

interface IPined {
  id: 'string'
}

const ButtonPined = ({user}:ICard) => {


    const{pined} = useAppSelector((state) => state.jobs);
    const dispatch = useAppDispatch();

    console.log(pined);
    
    console.log(user.id);

    const [isActive,setActive] = useState(pined.includes(user.id));
    console.log(isActive);
    const toggle = () => {
      
      (isActive) ? dispatch(unfolowUser(user.id)) : dispatch(folowUser(user.id));  
       setActive(!isActive);

    }
     useEffect(() => console.log(isActive),[isActive]);
   
    return (

     <div className='' onClick={toggle}>

       {(isActive) ? <Pined className='none lg:pined ' /> : <NotPined className='none lg:pined ' />}

     </div>

    )
}

export default ButtonPined;