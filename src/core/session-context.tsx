import React, { useState } from 'react';

interface Context {
  login: string;
  points: number;
  updateLogin: (value: string) => void;
  updatePoints: (value: number) => void;
}

export const SessionContext = React.createContext<Context>({
  login: 'no user',
  points: 0,
  updateLogin: value => {
    console.warn(
      'If you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
  updatePoints: value => {
    console.warn(
      'If you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
});

export const SessionProvider: React.FC = props => {
  const [login, setLogin] = useState('');
  const [points, setPoints] = useState(0);

  return (
    <SessionContext.Provider
      value={{ login, updateLogin: setLogin, points, updatePoints: setPoints }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
