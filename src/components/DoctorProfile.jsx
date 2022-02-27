import React from 'react';
import CardItem from './CardItem';
import NavBar from "./navigationbar";
import './DoctorProfile.css';
import AfterloginFutter from "./AfterloginFutter";

function DoctorProfile() {
    return (
      <div>
      <NavBar/>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">

    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    
    <div class="carousel-inner">
    <div class="carousel-item active">
      
    <div className='cards'>
          
    <div className='cards__container'>
    <div className='cards__wrapper'>
              
    <ul className='cards__items'>
                <CardItem
                  src='data:image/jpeg;base64,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'
                  text='Dr.Rohitha Senevirathna'
                  label='view profile'
                  path='/Dr.Rohitha_Senevirathna'
                />
                <CardItem
                  src='data:image/jpeg;base64,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'
                  text='Dr.Rohitha Senevirathna'
                  label='view profile'
                  path='/'
                />
                <CardItem
                  src='https://media.istockphoto.com/photos/male-medical-professional-is-confident-in-studio-picture-id1201439096?k=20&m=1201439096&s=170667a&w=0&h=aYuJxV4SkvfMRjuacN_UeOn4t4aixa08wpPZxvBa82w='
                  text='Dr.Rohitha Senevirathna'
                  label='view profile'
                  path='/'
                />
    </ul>
    </div>
    </div>
    </div>
    </div>

    <div class="carousel-item">
    <div className='cards'>
    <div className='cards__container'>
    <div className='cards__wrapper'>
              
    <ul className='cards__items'>
                <CardItem
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsddUPgE6KWJrwB6J_mgWXmrOGmVKKIFik8A&usqp=CAU'
                  text='Dr.Rohitha Senevirathna'
                  label='view profile'
                  path='/'
                />
                <CardItem
                  src='data:image/jpeg;base64,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'
                  text='Dr.Rohitha Senevirathna '
                  label='view profile'
                  path='/'
                />
                <CardItem
                  src='data:image/jpeg;base64,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'
                  text='Dr.Rohitha Senevirathna '
                  label='view profile'
                  path='/'
                />
    </ul>
    </div>
    </div>
    </div>
    </div>
    
    <div class="carousel-item">
    <div className='cards'>
    <div className='cards__container'>
    <div className='cards__wrapper'>
              
    <ul className='cards__items'>
                <CardItem
                  src='https://st3.depositphotos.com/10654668/i/600/depositphotos_138445604-stock-photo-male-doctor-in-hospital.jpg'
                  text='Dr.Rohitha Senevirathna '
                  label='view profile'
                  path='/'
                />
                <CardItem
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzleAaoT6cc_GYSeCXCdrVb4VEoxvFTpXZUg&usqp=CAU'
                  text='Dr.Rohitha Senevirathna '
                  label='view profile'
                  path='/'
                />
                <CardItem
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUBiafy5tbmfSl4EGJ8kzRVpkps2hmz_8Gg&usqp=CAU'
                  text='Dr.Rohitha Senevirathna '
                  label='view profile'
                  path='/'
                />
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
   </div>

   <div class="doc_footer">
   <AfterloginFutter />
   </div>  
   </div>
      
    );
  }
  
  export default DoctorProfile;