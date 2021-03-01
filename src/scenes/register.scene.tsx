import { CenteredLayout } from 'layouts';
import { RegisterContainer } from 'pods/register';
import React from 'react';

export const RegisterScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <RegisterContainer />
      </CenteredLayout>
    </>
  );
};
