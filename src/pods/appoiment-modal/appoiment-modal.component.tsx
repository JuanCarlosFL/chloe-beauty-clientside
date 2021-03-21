import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { CustomStepper } from 'common/components/stepper';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 30 + rand();
  const left = 40 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 950,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  item: {
    justifyItems: 'center',
    fontSize: '20vw',
    color: '#ff69b4',
  },
}));

interface Props {
  open: boolean;
  close: () => void;
}

export const SimpleModal: React.FC<Props> = (props) => {
  const { open, close} = props;
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="Obetener una cita"
        aria-describedby="Wizard para que un cliente seleccione una cita para un tratamiento"
        open={open}
        onClose={ close }
      >
        {
          <div style={modalStyle} className={classes.paper}>
            <CustomStepper close={ close }/>
          </div>
        }
      </Modal>
    </div>
  );
}
