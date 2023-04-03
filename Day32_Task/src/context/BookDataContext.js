import React, { useState} from "react";

// import initialBooksItem from '../data/booklist.json';

export const BookDataContext = React.createContext();

const BookStore = ({children}) => {

  const [open, setOpen] = useState(null);

    return(
        <BookDataContext.Provider value={[open, setOpen]}>{children}</BookDataContext.Provider>
    )
}

export default BookStore;