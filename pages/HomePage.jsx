import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function HomePage() {
  const navigate = useNavigate()
  return (
    <div style={{}}>
    <Navbar/>
    <Sidebar/>
    </div>
  );
}

export default HomePage;
