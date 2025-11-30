import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentRegister from './components/StudentRegister';
import StudentLogin from './components/StudentLogin';
import StudentList from './components/StudentList';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/login" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
