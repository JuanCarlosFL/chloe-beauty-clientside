import { linkRoutes } from 'core/router';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface TreatmentID {
  id: string;
}

export const TreatmentListScene: React.FC = () => {
  const { id } = useParams<TreatmentID>();

  return (
    <>
      <h1>Hello from treatment list Scene {id}</h1>
      <Link to={linkRoutes.login}>Navigate to login</Link>
    </>
  );
};
