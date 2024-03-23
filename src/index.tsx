import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataContext, data } from './DataContext';

// import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


const route = 
<DataContext.Provider value={data}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard/:pid' element={<Dashboard age={10} />} />
    </Routes>
  </BrowserRouter>
</DataContext.Provider>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( route );

