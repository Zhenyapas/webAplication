import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Loading from './components/Loading';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import JobDetails from './Pages/JobDetails';
import WorkList from './Pages/WorkList';

import { fetchUsers } from './Store/actions/userActions';


 


function App() {



  const dispatch = useAppDispatch();

  const {loading,currentPage,error} = useAppSelector(state => state.jobs);

  const navigate = useNavigate();
  const path = useLocation();

  


  React.useEffect(() => {
     dispatch(fetchUsers());
     if(path.pathname === '/') navigate(`/${currentPage}`);

     },[]);


   if(loading) return <Loading />
   if(error) return <Error error={error} />
 

 return (

        <div className='App'>

         <Routes>

          <Route path={`/:page`} element={<WorkList />} />
          <Route path='/jobdetails/:id' element={<JobDetails />} />

         </Routes>
   


        </div>
    

  );
}

export default App;
