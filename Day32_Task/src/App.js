
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Booklist } from './components/Booklist';
import { BookDetails } from './components/BookDetails';
import { Navbar } from './components/Navbar';
import BookStore from './context/BookDataContext';
import { AddBook } from './components/AddBook';
import { EditBook } from './components/EditBook';



function App() {
 
  return (
    <BookStore>
      
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Booklist /> }/>
        <Route exact path="/books" element={ <Booklist /> }/>
        <Route exact path="/books/add" element={ <AddBook /> }/>
        <Route exact path="/books/edit/:id" element={ <EditBook /> }/>
        <Route path="/books/:id" element={ <BookDetails /> }/>
      </Routes>
    </div>
    </BookStore>
  );
}

export default App;
