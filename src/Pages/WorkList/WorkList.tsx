import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IUser } from '../../models/models';
import Card from './Card';

interface ICard {
  title:string,
  name:string
}

function WorkList() {


  const {loading,users} = useAppSelector(state => state.jobs);
  console.log(users);

  

  return (
   <div className='bg-[#E6E9F2] min-h-[100vh] w-[100vw] '>
      <div  className='container flex px-4 lg:px-12 lg:py-[0px] xl:px-0'>
      
          <div className='min-w-[320px] grow '>

                 { users.map( (elem) => <Card key={elem.id} user={elem} />)}
          
          </div>

      </div>
   </div>
  );
}

export default WorkList;