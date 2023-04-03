
import { Button, ButtonGroup } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Grade from '@mui/icons-material/Grade';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { BookDataContext } from '../context/BookDataContext';

export function Booklist() {
  const [booksItem, setBookItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${API}`);
      const data = await response.json();
      setBookItem(data);
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
  
  return (
    <>
    <div className="book-list">
      {booksItem.map((book) => {
        return <Books key={book.id} func={fetchData} {...book} />;
      })}
    </div>
    </>
  );
}

function Books({ title, imgUrl, rating, desc , id, func}) {
  const navigate = useNavigate();
  const [, setOpen ] = useContext(BookDataContext)
  const ratingColor = {
    color: rating > 8 ? "green" : "orange"
  };

  // DELETE request using fetch with async/await
  async function deleteBook(id) {
   await fetch(`${API}/${id}`, { method: "DELETE" });
    setOpen({ type: "success", msg: `Book Deleted Successfully !` });
    func();
  }

  return (
    <div className="books-container">
      <img className="books-poster" src={imgUrl} alt={title} />
      <div className="books-specs">
        <h3 className="books-name">{title}</h3>
        <p style={ratingColor} className="books-rating"><Grade/>{rating}</p>
      </div>
      <p className="books-info">{desc}</p>
      <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            sx={{ border: 0 }}
            size="small"
            onClick={() => navigate(`/books/${id}`)}
          >
            <PreviewIcon />
          </Button>
          <Button
            sx={{ border: 0 }}
            size="small"
            onClick={() => navigate(`/books/edit/${id}`)}
            color="warning"
          >
            <EditIcon />
          </Button>
          <Button
            sx={{ border: 0 }}
            size="small"
            onClick={() => deleteBook(id)}
            color="error"
          >
            <DeleteIcon />
          </Button>
        </ButtonGroup>
    </div>
    </div>
  );
}
