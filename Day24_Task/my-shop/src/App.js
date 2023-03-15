import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import Store from './context/ShoppingCartContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Store>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
            <Header />
            <Main />
            </>
          } />
          <Route path="/all-products" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Store>
    
  );
}

export default App;
