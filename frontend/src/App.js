import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Dashboard, Login, Register } from './pages'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Suspense fallback={<div className='custom-spinner'>loading....</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App