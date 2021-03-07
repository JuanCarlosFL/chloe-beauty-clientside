import { CenteredLayout, FooterComponent, HeaderComponent } from 'layouts';
import { TreatmentListContainer } from 'pods/treatment-list';
import React from 'react';

interface TreatmentID {
  id: string;
}

export const TreatmentListScene: React.FC = () => {
  return (
    <CenteredLayout>
      <HeaderComponent />
      <TreatmentListContainer />
      <FooterComponent />
    </CenteredLayout>
  );
};
