import { linkRoutes } from 'core/router';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getTreatmentsByUser } from './api';
import { TreatmentListComponent } from './treatment-list.component';
import { Treatment } from './api/treatment-list.model';
import { SessionContext } from 'core/session-context';
// Tipamos las props
interface Props {
  id: string;
}

export const TreatmentListContainer: React.FC = () => {
  // Creamos una colección de tratamientos
  const [treatmentHistory, setTreatmentHistory] = useState<Treatment[]>([]);
  // Guardamos el historial del navegador
  const history = useHistory();
  // Guardamos el parámetro que viene en la url
  const { id } = useParams<Props>();
  // Traemos el token del context
  const { token } = useContext(SessionContext);
  // Función para cargar la colección de tratamientos hechos al usuario
  const handleLoadData = async () => {
    const treatmentHistory = await getTreatmentsByUser(parseInt(id), token);
    setTreatmentHistory(treatmentHistory);
  };
  // Cargamos la colección al pintar el componente
  useEffect(() => {
    handleLoadData();
  }, []);
  // Al pinchar en el botón volver redirige al menú
  const handleBack = () => {
    history.push(linkRoutes.menu);
  };
  // LLamamos al componente pasándole por props la función de volver y la colección de tratamientos
  return (
    <TreatmentListComponent
      onBack={handleBack}
      treatmentHistory={treatmentHistory}
    />
  );
};
