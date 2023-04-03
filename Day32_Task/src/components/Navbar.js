import { useNavigate } from 'react-router-dom';
import React, { forwardRef, useContext, useState } from 'react';
import { BookDataContext } from '../context/BookDataContext';
import { AppBar, Button, Snackbar, Toolbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Navbar() {
  const [ mode, setMode ] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate();
 
  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=>(navigate("/"))}>Home</Button>
        <Button color="inherit" onClick={()=>(navigate("/books"))}>Book List</Button>
        <Button color="inherit" onClick={()=>(navigate("/books/add"))}>Add Book</Button>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Button color="inherit" onClick={()=>(setMode(mode==="dark" ? "light" : "dark"))}>{mode} mode</Button>
      </Toolbar>
    </AppBar>
    <AlertSnack/>
      </ThemeProvider>
      </>
  );
}

function AlertSnack(){
  const [open,setOpen] = useContext(BookDataContext)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(null);
  };
  if(open){
    return(<Snackbar
      open={true} 
      anchorOrigin={	{ horizontal: 'right', vertical: 'top' }}
      autoHideDuration={6000} 
      onClose={handleClose}
      >
          <Alert onClose={handleClose} severity={open.type} sx={{ width: '100%' }}>
            {open.msg}
          </Alert>
        </Snackbar>)
  }
  else{
    return null;
  }
  
}
