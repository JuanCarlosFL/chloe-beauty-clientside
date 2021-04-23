import React from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import { SessionContext } from "../session-context";

export const AuthRouteComponent: React.FunctionComponent<RouteProps> = (
  props
) => {
  const { login } = React.useContext(SessionContext);
  const history = useHistory();

  React.useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};