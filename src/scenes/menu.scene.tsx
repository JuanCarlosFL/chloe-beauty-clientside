import { CenteredLayout, FooterComponent, HeaderComponent } from 'layouts';
import { MenuContainer } from 'pods/menu';
import React from 'react';

export const MenuScene: React.FC = () => {
  return (
    <CenteredLayout>
      <HeaderComponent />
      <MenuContainer />
      <FooterComponent />
    </CenteredLayout>
  );
};
