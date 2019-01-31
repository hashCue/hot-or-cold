import React from 'react';
import Link from './Link';

export default function Nav(props) {
  return (
    <div>
    <nav>
      <Link link={props.links[0]}/>
      <Link link={props.links[1]} onClick={props.onRestart}/>
    </nav>
    </div>

  );
}