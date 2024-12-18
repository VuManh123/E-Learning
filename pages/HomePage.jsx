import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardAddC from '../components/Card/CardAddC';
import CardAddV from '../components/Card/CardAddV';
import CardAddW from '../components/Card/CardAddW';
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
          <CardContentM navigateTo='/content'/>
        </div>
        <div>
          <CardUserM navigateTo='/userm'/>
        </div>
        <div>
          <CardAddC navigateTo/>
        </div>
        <div>
          <CardAddV navigateTo/>
        </div>
        <div>
          <CardAddW navigateTo/>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
