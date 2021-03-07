import React from 'react';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { UserEntityVM } from './menu.vm';
import * as classes from './menu.styles';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

interface Props {
  user: UserEntityVM;
}

export const MenuComponent: React.FC<Props> = props => {
  const { user } = props;
  console.log(user);
  return (
    <div className={classes.menu}>
      <div className={classes.menuBody}>
        <Link to={linkRoutes.login} className={classes.items}>
          <TabletMacIcon className={classes.item} />
          <p className={classes.text}>Quiero una cita</p>
        </Link>
        <Link to={linkRoutes.treatmentList} className={classes.items}>
          <ListAltIcon className={classes.item} />
          <p className={classes.text}>Históritco de tratamientos</p>
        </Link>
        <Link to={linkRoutes.loyaltyList} className={classes.items}>
          <MonetizationOnIcon className={classes.item} />
          <p className={classes.text}>Ofertas</p>
        </Link>
      </div>
    </div>
  );
};
