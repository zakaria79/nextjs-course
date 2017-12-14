import React from 'react';
import User from './../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page</h1>
    <User name={props.userName} age="38" />
  </div>
);

authIndexPage.getInitialProps = context => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({userName: 'Zak'});
    }, 2000);
  });
  return promise;
};

export default authIndexPage;

