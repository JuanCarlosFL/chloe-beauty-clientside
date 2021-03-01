import { CenteredLayout, HeaderComponent } from 'layouts';
import { FooterComponent } from 'layouts/footer.component';
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
