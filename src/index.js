import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Talkpython from './Talkpython'
import Docs from "./Docs"
import Dashboard  from './Dashboard';
import Signup from "./Signup"
import Login from "./Login"

import { store } from './app/store';
import { Provider } from 'react-redux';
import Hire from "./Hire"
import {Toaster} from "react-hot-toast"




ReactDOM.render(
  <Provider store={store}>
  <Toaster position="top-right"
  toastOption={{
    success:{
      theme:{
        primary:'#0d0e13'
      },
    },
  }}>
  </Toaster>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Hire />}/>
   <Route path='/community' element={<Talkpython></Talkpython>}/>
    <Route path='/documentation' element={<Docs />}/>
 <Route path='/portal' element={<Dashboard />}/>
    <Route path='/portal/ws/:id' element={<Dashboard />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/sign-up' element={<Signup/>} />
  </Routes>
  </BrowserRouter>
  </Provider>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
