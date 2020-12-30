import React, { FC, useEffect } from 'react';
import logo from './logo.svg';
import './Main.css';

// components
import GenericForm, { Handler as SublitHandler } from 'components/GenericForm';

// form
import { FormData, formFields, schema, Names } from 'config/forms/addEditEvent';

// hooks
import useStore from 'hooks/useStore';
import useDispatch from 'hooks/useDispatch';

// services
import { User } from 'services/users';

// store
import { login } from 'store/auth';

const Home: FC = () => {
  const user = useStore<User>('auth.user');
  const dispatch = useDispatch();

  const onSubmit: SublitHandler<FormData> = (data) => console.log(data);

  useEffect(() => {
    dispatch(login({ password: '111', email: 'test@test.com' }));
  }, []);

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
        <p>
          {user.firstName} {user.lastName}
        </p>
        <GenericForm<FormData, Names> {...{ formFields, schema, onSubmit }} />
      </header>
    </div>
  );
};

export default Home;
