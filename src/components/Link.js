import React from 'react';

export default function Link(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.link}</button>
    </div>
  );
}