import React from 'react';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const MenuComponent: React.FC = () => {
  return (
    <>
      <div style={{ minHeight: '70vh' }}>
        <TabletMacIcon style={{ fontSize: 200 }} />
        <ListAltIcon style={{ fontSize: 200 }} />
        <MonetizationOnIcon style={{ fontSize: 200 }} />
      </div>
    </>
  );
};
