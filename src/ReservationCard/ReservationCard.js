import React, { Component } from 'react';
import './ReservationCard.css';


const ReservationCard = (props) => {
  return (
    <div className='resy-card'>
      <p>NAME: {props.name}</p>
      <p>DATE: {props.date}</p>
      <p>TIME: {props.time}</p>
      <p>GUESTS: {props.number}</p>
    </div>
)}

export default ReservationCard;
