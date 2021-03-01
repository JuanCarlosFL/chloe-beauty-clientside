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
        <Route path={switchRoutes.menu} component={MenuScene} />
        <Route path={switchRoutes.loyaltyList} component={LoyaltyListScene} />
        <Route
          path={switchRoutes.treatmentList}
          component={TreatmentListScene}
        />
      </Switch>
    </Router>
  )
}
