import {Link} from 'react-router';
import React from 'react';

export default function Home () {
  return (
    <div>
      <h1>React Starter / Underdog.io</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
