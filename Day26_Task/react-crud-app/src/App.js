import './App.css';
import AlertContext from './context/AlertContext';
import Dashboard from './components/Dashboard';
import ShowAlert from './components/ShowAlert';

function App() {
  return (
    <AlertContext>
      <div className="App">
        <Dashboard/>
        <ShowAlert/>
      </div>
    </AlertContext>
    
  );
}

export default App;