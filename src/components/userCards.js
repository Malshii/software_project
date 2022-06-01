import React from 'react';
import CardItem from './CardItem';
import './Card.css';
import Footer from "./AfterloginFutter";
import Header_Doctor_profile from "./HeaderDoctorProfile";

function userCards(){
    
    return (<>
      <Header_Doctor_profile/>
        <div className='cards'>
          
          <div className='cards__container'>
            <div className='cards__wrapper'>
              
              <ul className='cards__items'>
                <CardItem
                  src="doc_reges.jpg"
                  text='Medical Request'
                  label='medical report'
                  path='/medical_reqest'
                />
                <CardItem
                  src='book appoinment.png'
                  text='Make An Appoinment '
                  label='book now'
                  path='/make an appoinment'
                />
                <CardItem
                  src='report.png'
                  text='View Medical Report Request '
                  label='view now'
                  path='/view medical report request'
                />
              </ul>
            </div>
          </div>
        </div>
        <Footer/></>
      );
}
    export default userCards;