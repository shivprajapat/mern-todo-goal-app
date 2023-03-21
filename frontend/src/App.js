import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateGoal, CustomSpinner, Header } from "components";
import { Dashboard, Login, Register } from "./pages";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "routers/ProtectedRoute";
import { useSelector } from 'react-redux'

const App = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <Suspense fallback={<CustomSpinner />}>

        {user && <Header />}

        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute isAuthenticated={user} />}>

            <Route path="/" element={<Dashboard />} />
            <Route path="/create-goal" element={<CreateGoal />} />
            
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
