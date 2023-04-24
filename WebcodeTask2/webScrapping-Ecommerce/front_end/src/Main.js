import { Container } from '@mui/material'
import React from 'react'
import { Routes , Route, } from 'react-router-dom';
import { Page404 } from './Page404';
import StoreData from './StoreData';

function Main() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <Routes>
        <Route path="/" element={<StoreData/>} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
      </Container>
  )
}

export default Main
