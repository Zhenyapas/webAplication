import React from 'react';
import {ReactComponent as Star} from '../img/star.svg';
import {ReactComponent as Share} from '../img/share-3-dott.svg';

function Header() {
  return (

    <>
      <header className='flex flex-col    sm:flex-row sm:items-center  ' >

          <h1 className='font-proxima text-h1 text-primary '>Job Details</h1>
        

          <div className='h-[1px] bg-secondary  opacity-10 mt-[12px] sm:display-none'></div>   


          <div className='sm:grow '>
            <div className='flex items-center mt-6 sm:grow sm:justify-end sm: min-width-[300px] '>

              <Star className='w-[19px] fill-secondary mb-[2px] opacity-90  ' />
              <span className=' -tracking-[0.5px] text-2 text-secondary ml-3 md:font-roboto'>Save to my list</span>

              <Share className='w-[19px] fill-secondary mt-[1px] ml-9 opacity-90'/>
              <span className='-tracking-[0.5px] leading-5 text-2  text-secondary  ml-3'>Share</span>
            </div>
           </div> 

      </header>
    </>
       
  );
}

export default Header;