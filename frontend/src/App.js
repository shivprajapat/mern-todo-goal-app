import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from 'components'
import { Dashboard, Login, Register } from './pages'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App