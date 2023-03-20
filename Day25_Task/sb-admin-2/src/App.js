
import './App.css';
import React from 'react';
import { Sidebar } from './Components/Sidebar';
import { MainContent } from './Components/MainContent';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Pages/Login';
import { Register } from './Components/Pages/Register';
import { ForgetPassword } from './Components/Pages/ForgetPassword';

function App() {
    return (
        <div className="App">
            <div id="wrapper">
                <Routes>
                    <Route exact path="/login" element={ <Login/> }/>        
                    <Route exact path="/register" element={ <Register/> }/>        
                    <Route exact path="/forgot-password" element={ <ForgetPassword/> }/>        
                    {['/*'].map(path => <Route key="path" path={path} element={<>
                        <Sidebar/>
                    <MainContent/></>} />)} 
                </Routes>
                
                
            </div>
        </div>
    );
}

export default App;
