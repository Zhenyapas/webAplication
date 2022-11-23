import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import WorkList from './Pages/WorkList';

import { fetchUsers } from './Store/actions/userActions';


 


function App() {



  const dispatch = useAppDispatch();

  const {loading,users} = useAppSelector(state => state.jobs);



  React.useEffect(() => {
     dispatch(fetchUsers());
     },[]);

     if(loading) return <div className='bg-yellow-400'>Loading...</div> ;

 return (

        <div className='App'>

        
            
        <WorkList />

      

        </div>
    

  );
}

export default App;
