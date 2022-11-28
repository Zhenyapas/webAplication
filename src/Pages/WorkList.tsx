import React, { useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Card from './Card';
import { setCurrentPage } from '../Store/actions/userActions';
import Paginator from '../components/paginator'




function WorkList() {

  const {users,currentPage} = useAppSelector(state => state.jobs);
  const dispatch = useAppDispatch();

 

  const pageSize = 5;
  let pageCount = Math.ceil(users.length / pageSize);

  

  const startIndex = pageSize * (+currentPage);


 


  const sortUsers = (currentPage == 1) ? users.slice(0, 0 + pageSize) :
   (currentPage < pageCount) ? users.slice(startIndex,startIndex + pageSize) :
  users.slice(startIndex - pageSize);


  const params = useParams();


  useEffect(() => dispatch(setCurrentPage(params.page)),[]);

  useEffect(() => {

      window.scrollTo(0,0);
      dispatch(setCurrentPage(params.page))

    },[params]);
  


 
  return (
   <div className='bg-[#E6E9F2] min-h-[100vh] w-[100vw] '>
      <div  className='container flex px-4 lg:px-12 lg:py-[0px] xl:px-0'>
      
          <div className='min-w-[320px] grow '>

                 { sortUsers.map( (elem) => <Card key={elem.id} user={elem} />)}
          
          </div>

      </div>


      <div  className='container mt-[26px] mb-[17px] justify-center flex px-4 lg:px-12 lg:py-[0px] xl:px-0'>
            <Paginator paramsPage={params.page} pageCount={pageCount} currentPage={currentPage} />
      </div>


   </div>
  );
}

export default WorkList;