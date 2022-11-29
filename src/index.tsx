import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  { setUpStore } from './Store/index'
import { BrowserRouter } from 'react-router-dom';


const store = setUpStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter basename={process.env.PABLIC_URL}>
    
    <Provider store={store}>
      <App />
    </Provider>
    
  </BrowserRouter>
);


