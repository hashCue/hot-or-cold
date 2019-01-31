import React from 'react';
import Card from './Card';
import Header from './Header';

export default function Guess(props) {
  return(
    <main>
      <Header text={props.title} />
      <Card onGuess={props.onGuess} guesses={props.guesses}/>
    </main>
  );
}