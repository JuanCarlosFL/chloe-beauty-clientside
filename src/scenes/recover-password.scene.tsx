import { CenteredLayout } from 'layouts';
import { RecoverPasswordContainer } from 'pods/recover-password';
import React from 'react';

export const RecoverPasswordScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <RecoverPasswordContainer />
      </CenteredLayout>
    </>
  );
};
