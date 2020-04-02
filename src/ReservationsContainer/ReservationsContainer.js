import React, { Component } from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';
import './ReservationsContainer.css';


const ReservationsContainer = (props) => {
  return (
    <div className='resy-container'>
        {props.reservations.map(reservation => (
          <ReservationCard
            name={ reservation.name }
            date={ reservation.date }
            time={ reservation.time }
            number={ reservation.number }
          />
        ))}
    </div>
  )
}

export default ReservationsContainer;
