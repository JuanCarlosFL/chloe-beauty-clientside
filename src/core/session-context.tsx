import React, { useState } from 'react';

interface Context {
  login: string;
  points: number;
  personId: number;
  treatmentId: number;
  availabilityId: number;
  updateLogin: (value: string) => void;
  updatePoints: (value: number) => void;
  updatePersonId: (value: number) => void;
  updateTreatmentId: (value: number) => void;
  updateAvailabilityId: (value: number) => void;
}

export const SessionContext = React.createContext<Context>({
  login: 'no user',
  points: 0,
  personId: 0,
  treatmentId: 0,
  availabilityId: 0,
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
  updatePersonId: value => {
    console.warn(
      'If you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
  updateTreatmentId: value => {
    console.warn(
      'If you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
  updateAvailabilityId: value => {
    console.warn(
      'If you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
});

export const SessionProvider: React.FC = props => {
  const [login, setLogin] = useState('');
  const [points, setPoints] = useState(0);
  const [personId, setPersonId] = useState(0);
  const [treatmentId, setTreatmentId] = useState(0);
  const [availabilityId, setAvailabilityId] = useState(0);

  return (
    <SessionContext.Provider
      value={{ 
        login, updateLogin: setLogin, 
        points, updatePoints: setPoints, 
        personId, updatePersonId: setPersonId, 
        treatmentId, updateTreatmentId: setTreatmentId,
        availabilityId, updateAvailabilityId: setAvailabilityId
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
