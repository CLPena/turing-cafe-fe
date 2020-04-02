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

  submitNewReservation = () => {

  }

  resetInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      guests: 1
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
          value={this.state.guests}
          name='guests'
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
