import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { SessionProvider } from 'core/session-context';

// Componente principal que pinta los componentes de ThemeProvider, SessionProvider y RouterComponent

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <SessionProvider>
        <RouterComponent />;
      </SessionProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
