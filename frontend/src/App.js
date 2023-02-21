import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Dashboard, Login, Register } from './pages'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  )
}

export default App