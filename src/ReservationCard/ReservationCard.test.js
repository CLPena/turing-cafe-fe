import React from 'react';
import ReactDOM from 'react-dom';
import ReservationCard from './ReservationCard';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReservationCard', () => {

  it('Displays with a name ', () => {
    const {getByText} = render(<ReservationCard name='Beyonce' date='2020-12-02' time='07:30' number='1' />);

    expect(getByText('NAME: Beyonce')).toBeInTheDocument()
  })

  it('Displays with a date ', () => {
    const {getByText} = render(<ReservationCard name='Beyonce' date='2020-12-02' time='07:30' number='1' />);

    expect(getByText('DATE: 2020-12-02')).toBeInTheDocument()
  })

  it('Displays with a time ', () => {
    const {getByText} = render(<ReservationCard name='Beyonce' date='2020-12-02' time='07:30' number='1' />);

    expect(getByText('TIME: 07:30')).toBeInTheDocument()
  })

  it('Displays with a number of guests ', () => {
    const {getByText} = render(<ReservationCard name='Beyonce' date='2020-12-02' time='07:30' number='1' />);

    expect(getByText('GUESTS: 1')).toBeInTheDocument()
  })

})
