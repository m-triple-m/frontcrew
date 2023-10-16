import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Main from './Main';
import Login from './components/Login';
import CoreComponent from './CoreComponent';
import Signup from './components/Signup';

const App = ({store}) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/login"/>} path='/' />
          <Route element={<CoreComponent/>} path='main' />
          <Route element={<Login/>} path='login' />
          <Route element={<Signup/>} path='signup' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;