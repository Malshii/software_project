import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';

function ViewDoctorCardItems(props) {
 
   
    
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} state={{category:'rashmi'}} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='clinical center image'
              src={props.src}
             />
             </figure>
            <div className='cards__item__info '>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ViewDoctorCardItems;