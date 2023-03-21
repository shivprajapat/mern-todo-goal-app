import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "components";
import { Dashboard, Login, Register } from "./pages";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
