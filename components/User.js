import React from 'react';

const user = props => (
  <div>
    <h1>Name: {props.name}</h1>
    <p>Age: {props.age}</p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
        width: 60%;
        margin: 2rem auto;
      }
    `}</style>
  </div>
);

export default user;
