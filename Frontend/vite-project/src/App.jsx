import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast';
import {useAuth} from './Context/AuthProvider.jsx'


function App() {
    const [authUser , setAuthUser] = useAuth();
    console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-700 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={authUser ? <Courses /> :<Navigate to ="/Singup"/>} />
          <Route path="/Signup" element={<Signup />} />
          
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;