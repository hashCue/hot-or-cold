import React from 'react';
import Results from './Results';
import Form from './Form';
import CompletedGuesses from './CompletedGuesses'


export default function Card(props) {
  return (
    <div>
      <Results text={props.feedback}/>
      <Form onSubmit={value => props.onGuess(value)}/>
      <CompletedGuesses guesses={props.guesses}/>
    </div>
  );
  
}