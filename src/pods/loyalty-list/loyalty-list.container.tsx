import { linkRoutes } from 'core/router';
import { SessionContext } from 'core/session-context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getLoyalties, Loyalty } from './api';
import { LoyaltyListComponent } from './loyalty-list.component';

export const LoyaltyListContainer: React.FC = () => {
  // Guardamos el historial
  const history = useHistory();
  // Creamos un array de foertas vacío
  const [loyalties, setLoyalties] = useState<Loyalty[]>([]);
  // Traemos el token del contexto
  const { token } = useContext(SessionContext);
  // Función que carga la lista de ofertas
  const handleGetLoyalties = async () => {
    const data: Loyalty[] = await getLoyalties(token);
    setLoyalties(data);
  };
  // Cargamos la lista de ofertas cuando se monta el componente
  useEffect(() => {
    handleGetLoyalties();
  }, []);
  // Al pinchar en el botón volver redirige al menú
  const handleBack = () => {
    history.push(linkRoutes.menu);
  };
  // LLamamos al componente pasándole la lista de ofertas
  return <LoyaltyListComponent onBack={handleBack} loyalties={loyalties} />;
};
