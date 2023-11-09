// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './views/Home';
import { Container } from 'react-bootstrap';



function App() {

  return (
    <>
      <Navigation/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
