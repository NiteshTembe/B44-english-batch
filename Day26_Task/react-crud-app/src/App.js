import './App.css';
import UserDetails from './context/UserDetails';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <UserDetails>
      <div className="App">
        <Dashboard/>
        {/* <Sidebar/>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/create-user" element={<AddUser />} />
        </Routes> */}
      </div>
    </UserDetails>
    
  );
}

export default App;