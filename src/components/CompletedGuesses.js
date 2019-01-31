import React from 'react';
import Number from './Number';


export default function CompletedGuesses(props) {

  const guesses = props.guesses.map((guess, index) => {
    return (
    <li key={index}>
      {guess}
    </li>
    );
  });

  return (
    <ul className='guessList'>
      {guesses}
    </ul>
  );
}