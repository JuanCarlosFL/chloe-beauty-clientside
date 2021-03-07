import { CenteredLayout, FooterComponent, HeaderComponent } from 'layouts';
import { LoyaltyListContainer } from 'pods/loyalty-list';
import React from 'react';

export const LoyaltyListScene: React.FC = () => {
  return (
    <CenteredLayout>
      <HeaderComponent />
      <LoyaltyListContainer />
      <FooterComponent />
    </CenteredLayout>
  );
};
