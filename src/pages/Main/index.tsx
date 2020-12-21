import React, { FC } from 'react';
import logo from './logo.svg';
import './Main.css';

const Home: FC = () => {
  return (
    <div className='Home'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {process.env.REACT_APP_API_URL}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
