import React from 'react';
import '../components/HeroSection.css';
import { Button } from './Button';
import NavBar from "./navigationbar";
import SearchBar from "./SearchBar";
import AfterloginFutter from "./AfterloginFutter";

function HeroSection() {
  return (
      <>
       <NavBar/>
      <SearchBar/>
    <div className='hero-container'>
      
     
     
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          TODAY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PREVIOUS 
        </Button>
      </div>
    </div>
    
    <div class="doc_footer">
      <AfterloginFutter />
      </div>
    </>
  );
}

export default HeroSection;