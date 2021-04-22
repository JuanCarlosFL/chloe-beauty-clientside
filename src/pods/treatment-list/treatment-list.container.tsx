import { linkRoutes } from 'core/router';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getTreatmentsByUser } from './api';
import { TreatmentListComponent } from './treatment-list.component';
import { Treatment } from './api/treatment-list.model';
import { SessionContext } from 'core/session-context';

interface Props {
  id: string;
}

export const TreatmentListContainer: React.FC = () => {
  const [treatmentHistory, setTreatmentHistory] = useState<Treatment[]>([]);
  const history = useHistory();
  const { id } = useParams<Props>();
  const { token } = useContext(SessionContext);

  const handleLoadData = async () => {
    const treatmentHistory = await getTreatmentsByUser(parseInt(id), token);
    setTreatmentHistory(treatmentHistory);
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  const handleBack = () => {
    history.push(linkRoutes.menu);
  };

  return (
    <TreatmentListComponent
      onBack={handleBack}
      treatmentHistory={treatmentHistory}
    />
  );
};
