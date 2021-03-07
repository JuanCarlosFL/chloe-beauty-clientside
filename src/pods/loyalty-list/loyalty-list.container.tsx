import { linkRoutes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router';
import { LoyaltyListComponent } from './loyalty-list.component';

export const LoyaltyListContainer: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push(linkRoutes.menu);
  };

  return <LoyaltyListComponent onBack={handleBack} />;
};
