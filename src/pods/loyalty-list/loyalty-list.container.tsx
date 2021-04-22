import { linkRoutes } from 'core/router';
import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getLoyalties, Loyalty } from './api';
import { LoyaltyListComponent } from './loyalty-list.component';

export const LoyaltyListContainer: React.FC = () => {
  const history = useHistory();
  const [loyalties, setLoyalties] = useState<Loyalty[]>([]);
  const { token } = useContext(SessionContext);

  const handleGetLoyalties = async () => {
    const data: Loyalty[] = await getLoyalties(token);
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
