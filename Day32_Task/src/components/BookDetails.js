import Grade from "@mui/icons-material/Grade";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../global";

export function BookDetails() {
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  const bookId = useParams().id;
  useEffect(() => {
    
    async function fetchData() {
      try {
        const response = await fetch(`${API}/${bookId}`);
        const data = await response.json();
        setBook(data);
        // console.log(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [bookId]);

  

  return (
    <>
    <div className="container iframe-container">
      <iframe className="responsive-iframe"
        src={book.trailer}
        title={book.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="container w-50">
        <div className="books-specs">
          <h3 className="books-name">{book.title}</h3>
          <p className="books-rating">
            <Grade />
            {book.rating}
          </p>
        </div>
        <p className="books-info">{book.desc}</p>
        <Button onClick={() => navigate(-2)}>back</Button>
      </div>
    </>
  );
}
