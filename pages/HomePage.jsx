import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function HomePage() {
  const navigate = useNavigate()
  return (
    <div style={{}}>
      <div style={{width: "100%"}}><Navbar/></div>
      <div style={{display: 'flex'}}>
        <div><Sidebar/></div>
        <div>HomePage</div>
      </div>
    </div>
  );
}

export default HomePage;
