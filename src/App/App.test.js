import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('Allows the user to add a new reservation', () => {
    Date.now = jest.fn().mockImplementation(() => 11111111);
    const {getByText, getByPlaceholderText} = render(<App/>);

    fireEvent.change(getByPlaceholderText('name'), { target: { value: 'Beyonce' } })
    fireEvent.change(getByPlaceholderText('date'), { target: { value: '2020-04-15' } })
    fireEvent.change(getByPlaceholderText('time'), { target: { value: '07:30' } })
    fireEvent.change(getByPlaceholderText('number'), { target: { value: 1 } })

    fireEvent.click(getByText('SUBMIT'))

    expect(getByText('NAME: Beyonce')).toBeInTheDocument()
    expect(getByText('TIME: 07:30')).toBeInTheDocument()
    expect(getByText('DATE: 2020-04-15')).toBeInTheDocument()
    expect(getByText('GUESTS: 1')).toBeInTheDocument()

  });
})
