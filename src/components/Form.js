import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  
  makeGuess(event) {
    event.preventDefault();
    if (this.props.onSubmit) {
      const value = this.input.value;
      this.props.onSubmit(value);
    }
  }

  render() {
    return (
      <form onSubmit={e => this.makeGuess(e)}>
        <input 
          type='number' 
          min='1' 
          max='100'
          ref={input => (this.input = input)}
      
        />
          
        <button type='submit'>Guess</button>
      </form>
    );
  }

}