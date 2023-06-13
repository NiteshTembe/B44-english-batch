import { Navigate, Route, Routes } from 'react-router-dom';
import { ForgetPassword } from './pages/ForgetPassword';
import { Login } from './pages/Login';
import { Page404 } from './pages/Page404';
import { Register } from './pages/Register';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Queries from './pages/Queries';

function App() {
  return (
                <Routes>
                    <Route path="/" element={<Layout />}>
                      {/* Public routes */}
                      <Route exact path="login" element={ <Login/> }/>                
                      <Route exact path="register" element={ <Register/> }/>         
                      <Route exact path="forgot-password" element={ <ForgetPassword/> }/>      
                      <Route exact path="page-404" element={ <Page404/> }/>  

                      {/* Private Routes */}
                      <Route element={<RequireAuth />}>
                        {/* <Route exact path="home" element={ <Home/> }/> */}
                        <Route exact path="dashboard" element={ <Dashboard/> }/>
                        <Route exact path="queries/*" element={ <Queries/> }/>
                      </Route>
                      <Route path="/" element={ <Navigate replace to="/login" /> }/>
                      <Route path="*" element={ <Navigate replace to="/page-404" /> }/> 
                    </Route>                     
                </Routes>
  );
}

export default App;
