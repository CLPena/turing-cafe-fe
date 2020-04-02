import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: 1
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitNewReservation = (e) => {
    e.preventDefault();
    const { addNewReservation } = this.props;
    const newReservation = { ...this.state, id: Date.now()};
    addNewReservation(newReservation)
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: 1
    })
  }

  render() {
    return (
      <form>
        <h3>NEW RESERVATION:</h3>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='date'
          placeholder='date'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='time'
          placeholder='time'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='guests'
          value={this.state.number}
          name='number'
          onChange={this.handleChange}
        />
        <button
          onClick={this.submitNewReservation}>
          SUBMIT
        </button>
      </form>
    )
  }
}

export default Form;
