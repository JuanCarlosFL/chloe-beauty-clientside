import React from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import { SessionContext } from "../session-context";
// Componente para la autorización
export const AuthRouteComponent: React.FunctionComponent<RouteProps> = (
  props
) => {
  // Traemos el login del context y el histórico del navegador
  const { login } = React.useContext(SessionContext);
  const history = useHistory();
  // Cuando se pinta comprobamos si el login está vacío
  React.useEffect(() => {
    if (!login) {
      // Si está vacío redireccionamos al root de la aplicación
      history.push("/");
    }
  }, [props?.location?.pathname]);
  
  return <Route {...props} />;
};