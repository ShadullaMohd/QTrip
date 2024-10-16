import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import City from './Components/City';
import Adventures from './Components/Adventures';
import Nav from './Components/Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Nav/>
  <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<App />}></Route>
      <Route path='/city/:id' element={<City />}></Route>
      <Route path='/adventures/:id' element={<Adventures/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
    
  
);

