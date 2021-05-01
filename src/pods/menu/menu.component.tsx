import React, { useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { UserEntityVM } from './menu.vm';
import * as classes from './menu.styles';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { SimpleModal } from 'pods/appoiment-modal/appoiment-modal.component';
import { Button } from '@material-ui/core';
import TabletMacIcon from '@material-ui/icons/TabletMac';
// Interface para tipar las props
interface Props {
  user: UserEntityVM;
  saveAppointment: () => void;
  deleteAvailability: () => void;
}

export const MenuComponent: React.FC<Props> = props => {
  // Guardamos lo que nos viene por props
  const { user, saveAppointment, deleteAvailability } = props;
  // Creamos una vaiable a false para la ventana modal
  const [open, setOpen] = useState(false);
  // Función que abrirá la ventana modal
  const handleOpen = () => {
    setOpen(true);
  };
  // Función que cerrará  la ventana modal
  const handleClose = () => {
    setOpen(false);
  };
  // Función que cerrará la ventana modal, guardará la cita y la borrará de la disponibilidad cuando
  // El cliente confirme la cita
  const confirm = () => {
    setOpen(false);
    saveAppointment();
    deleteAvailability();
  };
  // Componente que pinta el menú usando botenes e inconos de Material UI
  // Y usando la rutas para redirigir al componente correspondiente
  return (
    <div className={classes.menu}>
      <div className={classes.menuBody}>

        <div className={classes.items}>
          <Button onClick={ handleOpen } className={ classes.button }>
            <TabletMacIcon className={classes.item} />
          </Button>
          <p className={classes.text}>Quiero una cita</p>
        </div>

        <SimpleModal open={ open } close={ handleClose } confirm={ confirm }/>

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
