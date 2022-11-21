import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './Store/actions/userActions';


 


function App() {



  const dispatch = useAppDispatch();

  const {loading,users} = useAppSelector(state => state.jobs);



  React.useEffect(() => {
     dispatch(fetchUsers());
     },[]);

     /* if(loading) return <div className='bg-yellow-400'>Loading...</div> ; */

  return (

    
         <div>hello world!</div>
    

  );
}

export default App;
