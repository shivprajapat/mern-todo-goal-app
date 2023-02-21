import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Dashboard, Login, Register } from './pages'

const App = () => {
  return (
    <Fragment>
    <Header />
    <Container className='mt-4'>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Container>
  </Fragment>
  )
}

export default App