import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PostForm from './Components/PostForm';
import RetrieveData from './Components/RetrieveData';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/post" element={<PostForm />} />
        <Route path="/retrieve" element={<RetrieveData />} />
        
      </Routes>
    </Router>
  );
};

export default App;
