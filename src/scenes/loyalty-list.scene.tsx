import { linkRoutes } from 'core/router';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface LoyaltyID {
  id: string;
}

export const LoyaltyListScene: React.FC = () => {
  const { id } = useParams<LoyaltyID>();

  return (
    <>
      <h1>Hello from loyalty list Scene {id}</h1>
      <Link to={linkRoutes.login}>Navigate to login</Link>
    </>
  );
};
