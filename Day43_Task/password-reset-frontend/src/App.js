import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { ForgetPassword } from './ForgetPassword';
import { Home } from './Home';
import { Page404 } from './Page404';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
                <Routes>
                    <Route exact path="/login" element={ <Login/> }/>        
                    <Route exact path="/register" element={ <Register/> }/>        
                    <Route exact path="/forgot-password" element={ <ForgetPassword/> }/>       
                    <Route exact path="/home" element={ <Home/> }/>
                    <Route exact path="/page-404" element={ <Page404/> }/>
                    <Route path="/" element={ <Navigate replace to="/home" /> }/>                      
                    <Route path="/*" element={ <Navigate replace to="/page-404" /> }/>                      
                </Routes>
            </div>
    </div>
  );
}

export default App;
