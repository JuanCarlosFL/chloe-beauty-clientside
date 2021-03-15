import { linkRoutes } from 'core/router';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getLoyalties, Loyalty } from './api';
import { LoyaltyListComponent } from './loyalty-list.component';

export const LoyaltyListContainer: React.FC = () => {
  const history = useHistory();
  const [loyalties, setLoyalties] = useState<Loyalty[]>([]);

  const handleGetLoyalties = async () => {
    const data: Loyalty[] = await getLoyalties();
    setLoyalties(data);
  };

  useEffect(() => {
    handleGetLoyalties();
  }, []);

  const handleBack = () => {
    history.push(linkRoutes.menu);
  };

  return <LoyaltyListComponent onBack={handleBack} loyalties={loyalties} />;
};
