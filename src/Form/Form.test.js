import React from 'react';
import Form from './Form';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Form', () => {
  it('Dispays with name, date, time, and number inputs', () => {
    const mockAddReservation = jest.fn();
    const {getByPlaceholderText} = render(<Form addNewReservation={mockAddReservation} />);

    expect(getByPlaceholderText('name')).toBeInTheDocument();

  })

  it('Lets the user input a name ', () => {
    const mockAddReservation = jest.fn();
    const {getByDisplayValue, getByPlaceholderText} = render(<Form addNewReservation={mockAddReservation} />);

    fireEvent.change(getByPlaceholderText('date'), { target: { value: '2020-04-15' } })
    expect(getByDisplayValue('2020-04-15')).toBeInTheDocument()
  })

  it('Lets the user input a date', () => {
    const mockAddReservation = jest.fn();
    const {getByDisplayValue, getByPlaceholderText} = render(<Form addNewReservation={mockAddReservation} />);

    fireEvent.change(getByPlaceholderText('name'), { target: { value: 'Beyonce' } })
    expect(getByDisplayValue('Beyonce')).toBeInTheDocument()
  })

  it('Lets the user input a time', () => {
    const mockAddReservation = jest.fn();
    const {getByDisplayValue, getByPlaceholderText} = render(<Form addNewReservation={mockAddReservation} />);

    fireEvent.change(getByPlaceholderText('time'), { target: { value: '07:30' } })
    expect(getByDisplayValue('07:30')).toBeInTheDocument()
  })

  it('Lets the user input a number of guests', () => {
    const mockAddReservation = jest.fn();
    const {getByDisplayValue, getByPlaceholderText} = render(<Form addNewReservation={mockAddReservation} />);

    fireEvent.change(getByPlaceholderText('number'), { target: { value: 1 } })
    expect(getByDisplayValue('1')).toBeInTheDocument()
  })

  it('Passes the correct argument to addNewReservation when called', () => {
    Date.now = jest.fn().mockImplementation(() => 11111111);
    const mockAddReservation = jest.fn();

    const {getByText, getByPlaceholderText} = render(<Form addNewReservation={mockAddReservation} />);

    fireEvent.change(getByPlaceholderText('name'), { target: { value: 'Beyonce' } })
    fireEvent.change(getByPlaceholderText('date'), { target: { value: '2020-04-15' } })
    fireEvent.change(getByPlaceholderText('time'), { target: { value: '07:30' } })
    fireEvent.change(getByPlaceholderText('number'), { target: { value: 1 } })

    fireEvent.click(getByText('SUBMIT'))

    expect(mockAddReservation).toHaveBeenCalledWith({name: 'Beyonce', date: '2020-04-15', time: '07:30', number: 1, id: Date.now()})
  });
});
