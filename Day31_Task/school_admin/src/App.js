
import './App.css';
import React from 'react';
import { MainContent } from './Components/MainContent';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Pages/Login';
import { Register } from './Components/Pages/Register';
import { ForgetPassword } from './Components/Pages/ForgetPassword';
import AlertContext from './context/AlertContext';

function App() {
    return (
        <AlertContext>
        <div className="App">
            <div id="wrapper">
                <Routes>
                    <Route exact path="/login" element={ <Login/> }/>        
                    <Route exact path="/register" element={ <Register/> }/>        
                    <Route exact path="/forgot-password" element={ <ForgetPassword/> }/>
                    {['/*'].map(path => <Route key="path" path={path} element={
                    <MainContent/>} />)} 
                </Routes>
            </div>
        </div>
        </AlertContext>
    );
}

export default App;
