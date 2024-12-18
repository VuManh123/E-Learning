import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardAddC from '../components/Card/CardAddC';
import CardAddV from '../components/Card/CardAddV';
import CardContentM from '../components/Card/CardContentM';
import CardUserM from '../components/Card/CardUserM';
import Header from '../components/Header';

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
    <Header/>
    <div>
      <h1>Menu</h1>
      <div className='homepageContainer'>
        <div>
          <CardContentM/>
          <button onClick={() => navigate('content')}>go</button>
        </div>
        <div>
          <CardUserM/>
          <button onClick={() => navigate('userm')}>go</button>
        </div>
        <div>
          <CardAddC/>
          <button onClick={() => navigate('addc')}>go</button>
        </div>
        <div>
          <CardAddV/>
          <button onClick={() => navigate('addv')}>go</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
