import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { UserEntityVM } from './menu.vm';
import * as classes from './menu.styles';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import SimpleModal from 'pods/appoiment-modal/appoiment-modal.component';

interface Props {
  user: UserEntityVM;
}

export const MenuComponent: React.FC<Props> = props => {
  const { user } = props;
  console.log(user.personId);
  return (
    <div className={classes.menu}>
      <div className={classes.menuBody}>
        <div className={classes.items}>
          <SimpleModal />
          <p className={classes.text}>Quiero una cita</p>
        </div>

        <Link
          to={`${linkRoutes.treatmentList(user.personId.toString())}`}
          className={classes.items}
        >
          <ListAltIcon className={classes.item} />
          <p className={classes.text}>Histórico de tratamientos</p>
        </Link>
        <Link to={linkRoutes.loyaltyList} className={classes.items}>
          <MonetizationOnIcon className={classes.item} />
          <p className={classes.text}>Ofertas</p>
        </Link>
      </div>
    </div>
  );
};
