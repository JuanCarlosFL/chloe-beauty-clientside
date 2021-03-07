import { linkRoutes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router';
import { TreatmentListComponent } from './treatment-list.component';

export const TreatmentListContainer: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push(linkRoutes.menu);
  };

  return <TreatmentListComponent onBack={handleBack} />;
};
