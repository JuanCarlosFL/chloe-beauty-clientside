import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  LoyaltyListScene,
  MenuScene,
  RecoverPasswordScene,
  RegisterScene,
  TreatmentListScene,
} from 'scenes';
import { AuthRouteComponent } from './authroute';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        />
        <Route path={switchRoutes.register} component={RegisterScene} />
        <Route
          path={switchRoutes.recoverPassword}
          component={RecoverPasswordScene}
        />
        <AuthRouteComponent path={switchRoutes.menu} component={MenuScene} />
        <AuthRouteComponent path={switchRoutes.loyaltyList} component={LoyaltyListScene} />
        <AuthRouteComponent
          path={switchRoutes.treatmentList}
          component={TreatmentListScene}
        />
      </Switch>
    </Router>
  )
}
