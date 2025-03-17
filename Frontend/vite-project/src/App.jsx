import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Signup from './Components/Signup'


function App() {
  return (
    <>
      <div className="dark:bg-slate-700 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;