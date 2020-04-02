import React, { Component } from 'react';
import './ReservationCard.css';


const ReservationCard = (props) => {
  // let uglyDate = props.date;
  // let dateArray = uglyDate.split('-')
  // let prettyDate = `${dateArray[1]}/${dateArray[2]}`
  //I started trying to clean up the date data but ran out of time!

  return (
    <div className='resy-card'>
      <p>NAME: {props.name}</p>
      <p>DATE: {props.date}</p>
      <p>TIME: {props.time}</p>
      <p>GUESTS: {props.number}</p>
    </div>
)}

export default ReservationCard;
