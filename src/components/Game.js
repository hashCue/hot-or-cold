import React from 'react';

import Nav from './Nav';
import Guess from './Guess';
import Header from './Header';
import Card from './Card';

import './Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [4, 2, 1],
      numberOfGuesses: 0,
      feedback: 'Make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      numberOfGuesses: 0,
      feedback: 'Make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  onGuess(guess) {
    console.log(guess, this.state.correctAnswer);
    this.setState({guesses: [...this.state.guesses, guess]});

    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);
    console.log(difference);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }
  
  render() {
    const {guesses, feedback} = this.state;
    console.log(guesses);
    const links = ['WHAT?', '+ NEW GAME'];
    const title = 'HOT OR COLD';
    return (
      <div className='game'>
        <Nav links={links} onRestart={() => this.restartGame()}/>
        <Header title={title} />
        <Card guesses={guesses} onGuess={value => this.onGuess(value)} feedback={feedback}/>
      </div>
    );
  }
}