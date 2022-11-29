import  { useEffect, useState } from 'react';
import {ReactComponent as Star} from '../img/star.svg';
import {ReactComponent as StarPinned} from '../img/StarPined.svg';
import {ReactComponent as Share} from '../img/share-3-dott.svg';
import {  IUser } from '../models/models';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { folowUser, unfolowUser } from '../Store/actions/userActions';
import Loading from './Loading';


interface IHeader {
  title:string,
  user:IUser
}

const useHeaderProps = (user:IUser) => {

  const{pined} = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();
  
  const [loading, setLoading] = useState(true); 

  useEffect(() => (user) && setLoading(false),[user]);

  return {loading, pined, dispatch}
}

function Header({title,user}:IHeader) {


  const {loading,pined,dispatch} = useHeaderProps(user);
  console.log(pined);


 
  const [isActive,setActive] = useState((user) ? pined.includes(user.id) : false);

  if(loading) return <Loading />

  const toggle = () => {
    
    (isActive) ? dispatch(unfolowUser(user.id)) : dispatch(folowUser(user.id));  
     setActive(!isActive);
     console.log(pined);

  }



  if(loading) return <Loading />

  return (



    

    <>
      <header className='flex flex-col    sm:flex-row sm:items-center sm:border-b-[1px] sm:border-[#3A4562]/[.13] ' >
        
          <h1 className='font-proxima text-h1 text-primary '>{title}</h1>
        

          <div className='h-[1px] bg-secondary  opacity-10 mt-[12px] sm:display-none'></div>   


          <div className='sm:grow  sm:flex '>
            
            <div className='flex items-center mt-6 sm:grow sm:justify-end  m:min-width-[300px] sm:relative sm:bottom-[10px]'>
          
              <div onClick={toggle} className='hover:opacity-70 cursor-pointer flex '>
                { (isActive) ?  <StarPinned className='w-[19px]   fill-secondary mb-[2px] opacity-90 '/> :

                                <Star className='w-[19px]  fill-secondary mb-[2px] opacity-90  ' /> 
                                
                }
                <span className={' -tracking-[0.5px] text-2 text-secondary   ml-3 md:font-roboto'} >Save to my list</span>
              </div>

              <Share className='w-[19px] fill-secondary mt-[1px] ml-9 opacity-90'/>
              <span className='-tracking-[0.5px] leading-5 text-2  text-secondary  ml-3'>Share</span>
            </div>
           </div> 

      </header>
    </>
       
  );
}

export default Header;